import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../../core/services/returnServerError'

export function registerDetail( DetailData: dbModels.Detail) {
	let detail: MongoModel = new MongoModel('detail');
	let deferred = Q.defer();

	let baseDetailData: dbModels.Detail = {
		idBill : DetailData.idBill,
        idProduct : DetailData.idProduct,
        quantity : DetailData.quantity,
        totalPrice : DetailData.totalPrice,
        totalWeight : DetailData.totalWeight
	};

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

	detail.findAll({idBill: billId}).then( ( respDetail: dbModels.Detail[] ) => {
		deferred.resolve(respDetail);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}