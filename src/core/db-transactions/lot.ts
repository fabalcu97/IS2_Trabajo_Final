import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { returnServerError } from '../services/returnServerError'
import { validateObject } from '../services/returnServerError'

export function registerLot( lotData: dbModels.Lot) {
	let lot: MongoModel = new MongoModel('lot');
	let deferred = Q.defer();

	let baseLotData: dbModels.Lot = {
		productId : lotData.productId,
		locationId : lotData.locationId,
		departureDate : lotData.departureDate,
		active : lotData.active
	};

	//Begin validate
	let validate = validateObject(baseLotData);

	if (!validate.flag) {

		deferred.reject(validate.error);
		return deferred.promise;
	}
	//End validate

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

	lot.findAll({
		productId: productId,
		active: false
	}).then( ( respLotData: dbModels.Lot ) => {
		deferred.resolve(respLotData);
	}).catch( () => {
		returnServerError(deferred)
	});

	
	return deferred.promise;
}

export function updateDepartureDateLot(lotId : string , lotDeparturelDate : number)
{
	let lot : MongoModel = new MongoModel('lot');
	let deferred = Q.defer();

	lot.updateOne(lotId,{
		$set:{departureDate:lotDeparturelDate}
	}).then( ( respOrderData : dbModels.Lot ) => {
		deferred.resolve(respOrderData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function updateActiveLot(lotId : string , lotActive : boolean)
{
	let lot : MongoModel = new MongoModel('lot');
	let deferred = Q.defer();

	lot.updateOne(lotId,{
		$set:{active: lotActive}
	}).then( ( respOrderData : dbModels.Lot ) => {
		deferred.resolve(respOrderData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

