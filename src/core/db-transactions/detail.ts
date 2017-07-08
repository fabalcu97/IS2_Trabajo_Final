import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../../core/services/returnServerError'
import { validateObject } from '../services/returnServerError'

export function registerDetail( DetailData: dbModels.Detail) {
	let detail: MongoModel = new MongoModel('detail');
	let deferred = Q.defer();

	let baseDetailData: dbModels.Detail = {
		billId : DetailData.billId,
		productId : DetailData.productId,
		quantity : DetailData.quantity,
		totalPrice : DetailData.totalPrice,
		totalWeight : DetailData.totalWeight,
		lotQuantity: DetailData.lotQuantity,
		stored : false
	};

	//Begin validate
	let validate = validateObject(baseDetailData);

	if (!validate.flag) {

		deferred.reject(validate.error);
		return deferred.promise;
	}
	//End validate

	detail.insertOne(baseDetailData).then( ( respDetailData: dbModels.Detail ) => {
		deferred.resolve(respDetailData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function getDetailByBillId(billId: string){
	let detail: MongoModel = new MongoModel('detail');
	let deferred = Q.defer();

	detail.findAll({billId: billId}).then( ( respDetail: dbModels.Detail[] ) => {
		deferred.resolve(respDetail);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function getValidDetail(billId: string){
	let detail: MongoModel = new MongoModel('detail');
	let deferred = Q.defer();

	detail.findAll({billId: billId, stored: false}).then( ( respDetail: dbModels.Detail[] ) => {
		deferred.resolve(respDetail);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function updateStoredDetail(detailId : string , detailStored : boolean)
{
	let detail : MongoModel = new MongoModel('detail');
	let deferred = Q.defer();

	detail.updateOne(detailId,{
		$set:{stored:detailStored}
	}).then( ( respDetailData : dbModels.Detail ) => {
		deferred.resolve(respDetailData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}