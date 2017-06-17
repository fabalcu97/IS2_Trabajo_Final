import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../services/returnServerError'
import { validateObject } from '../services/returnServerError'

export function registerType( typeData: dbModels.Type) {
	let type: MongoModel = new MongoModel('type');
	let deferred = Q.defer();

	let baseTypeData: dbModels.Type = {
        name : typeData.name
	};

	//Begin validate
	let validate = validateObject(baseTypeData);

	if (!validate.flag) {

		deferred.reject(validate.error);
		return deferred.promise;
	}
	//End validate

	type.insertOne(baseTypeData).then( ( respTypeData: dbModels.Type ) => {
		deferred.resolve(respTypeData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}