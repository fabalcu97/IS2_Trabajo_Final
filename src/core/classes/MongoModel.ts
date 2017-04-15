
// Imports
	import {MongoClient, ObjectID} from 'mongodb';
	import * as mongoose from 'mongoose';
	import * as Q from 'q';

// Setup
	let db: any;
	export function connectDatabase (databaseUrl: string) {
		var deferred = Q.defer();
		MongoClient.connect(databaseUrl, function (err, _db) {
			if (err) {
				deferred.reject(err);
				return;
			}
			db = _db;
			deferred.resolve();
		});
		return deferred.promise;
	}

// Exports
	export class MongoModel {

		// Attributes
			private name: string;
			private collection: mongoose.Collection;


		// Methods
			constructor (name: string) {
				this.name = name;
				this.collection = db.collection(name);
			}

			public createIndex (fields: any, options: any) {
				this.collection.createIndex(fields, options);
			}

			public insertOne(data: any) {
				let deferred = Q.defer();
				data.timestamp = Date.now();
				this.collection.insertOne(data, (err, resp) => {
					if (err) {
						deferred.reject(err);
						return;
					}
					let recordData = resp.ops[0];
					if (recordData && recordData._id){
						recordData.id = recordData._id.toString();
					}
					this.updateOne(recordData.id, recordData).then(() => {
						deferred.resolve(recordData);
					}).catch(deferred.reject);
					deferred.resolve(recordData);
				});
				return deferred.promise;
			}

			public updateOrCreate (criteria: any, data: any) {
				let deferred = Q.defer();
				this.collection.update(criteria, data, {
					upsert: true
				}, function (err, resp) {
					if (err) {
						deferred.reject(err);
						return;
					}
					var r: any = {};
					if (
						resp.result.upserted &&
						resp.result.upserted[0] &&
						resp.result.upserted[0]._id
					) r.id = resp.result.upserted[0]._id.toString();
					deferred.resolve(r);
				});
				return deferred.promise;
			}

			public updateOne (id: string, data: any) {
				let deferred = Q.defer();
				this.collection.updateOne({
					_id: new ObjectID(id)
				}, data, (err, res) => {
					if (err) {
						deferred.reject(err);
						return;
					}
					this.findById(id).then((recordData) => {
						deferred.resolve(recordData);
					}).catch((err) => {
						deferred.reject(err);
					});
				});
				return deferred.promise;
			}

			public findOne (criteria: any) {
				let deferred = Q.defer();
				this.collection.findOne(criteria, function (err, resp) {
					if (err) {
						deferred.reject(err);
						return;
					}
					if (resp) resp.id = resp._id.toString();
					deferred.resolve(resp);
				});
				return deferred.promise;
			}

			public findById (id: string) {
				let deferred = Q.defer();
				this.collection.findOne({
					_id: new ObjectID(id)
				}, function (err, resp) {
					if (err) {
						deferred.reject(err);
						return;
					}
					if (resp) resp.id = resp._id.toString();
					deferred.resolve(resp);
				});
				return deferred.promise;
			}

			public findAll (criteria: any) {
				var deferred = Q.defer();
				this.collection.find(criteria).toArray(function (err, resp) {
					if (err) {
						deferred.reject(err);
						return;
					}
					resp.map(function (record) {
						record._id = record._id.toString();
						record.id = record._id;
						return record;
					});
					deferred.resolve(resp);
				});
				return deferred.promise;
			}

			public remove (criteria: any) {
				let deferred = Q.defer();
				this.collection.remove(criteria, function (err, resp) {
					if (err) {
						deferred.reject(err);
						return;
					}
					deferred.resolve(resp);
				});
				return deferred.promise;
			}

			public removeById (id: string) {
				let deferred = Q.defer();
				this.collection.remove({
					_id: new ObjectID(id)
				}, function (err, resp) {
					if (err) {
						deferred.reject(err);
						return;
					}
					deferred.resolve(resp);
				});
				return deferred.promise;
			}

			public count (criteria?: any) {
				let deferred = Q.defer();
				criteria = criteria || {};
				this.collection.count(criteria, function (err, resp) {
					if (err) {
						deferred.reject(err);
						return;
					}
					deferred.resolve(resp);
				});
				return deferred.promise;
			}

			public aggregate (pipeline: any[], options: any) {
				let deferred = Q.defer();
				this.collection.aggregate(pipeline, options, function (err, resp) {
					if (err) {
						deferred.reject(err);
						return;
					}
					deferred.resolve(resp);
				});
				return deferred.promise;
			}

			public findAllFromIds (ids: string []) {
				return this.findAll({
					$or: ids.map(function (id) {
						return {
							_id: new ObjectID(id)
						};
					})
				});
			}

	}
