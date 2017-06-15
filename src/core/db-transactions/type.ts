import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../services/returnServerError'

export function registerType( typeData: dbModels.Type) {
	let type: MongoModel = new MongoModel('type');
	let deferred = Q.defer();

	let baseTypeData: dbModels.Type = {
        name : typeData.name
	};

	type.insertOne(baseTypeData).then( ( respTypeData: dbModels.Type ) => {
		deferred.resolve(respTypeData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}