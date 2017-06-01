import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { returnServerError } from '../services/returnServerError'

export function registerLot( lotData: dbModels.Lot) {
	let lot: MongoModel = new MongoModel('lot');
	let deferred = Q.defer();

	let baseLotData: dbModels.Lot = {
		productId : lotData.productId,
        locationId : lotData.locationId
	};

	lot.insertOne(baseLotData).then( ( respLotData: dbModels.Lot ) => {
		deferred.resolve(respLotData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function getLotByProductId (productId : string)
{
	let lot : MongoModel = new MongoModel('lot');
	let deferred = Q.defer();

	lot.findAll({productId: productId}).then( ( respLotData: dbModels.Lot ) => {
		deferred.resolve(respLotData);
	}).catch( () => {
		returnServerError(deferred)
	});

	
	return deferred.promise;
}

