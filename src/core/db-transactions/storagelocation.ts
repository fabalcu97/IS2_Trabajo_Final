import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { returnServerError } from '../services/returnServerError';

export function registerStorageLocation (storageLocationData: dbModels.StorageLocation) {
	let storageLocation: MongoModel = new MongoModel('storagelocation');
	let deferred = Q.defer();

	let baseStorageLocationData: dbModels.StorageLocation = {
        x : storageLocationData.x,
        y : storageLocationData.y,
        z : storageLocationData.z,
        available : true,
        category : storageLocationData.category
	};

	storageLocation.insertOne(baseStorageLocationData).then( ( respStorageLocationData: dbModels.StorageLocation ) => {
		deferred.resolve(respStorageLocationData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function getStorageLocationByCategory(category: string){
	let storageLocation: MongoModel = new MongoModel('storagelocation');
	let deferred = Q.defer();

	storageLocation.findAll({category: category,available: true}).then( ( respStorageLocation: dbModels.StorageLocation[] ) => {
		deferred.resolve(respStorageLocation);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function updateAvailableStorageLocation(storageLocationId : string , available : boolean)
{
	let StorageLocation : MongoModel = new MongoModel('storagelocation');
	let deferred = Q.defer();

	StorageLocation.updateOne(storageLocationId,{
		$set:{available:available}
	}).then( ( respStorageLocationData : dbModels.StorageLocation ) => {
		deferred.resolve(respStorageLocationData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}