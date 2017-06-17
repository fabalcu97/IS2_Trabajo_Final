import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../services/returnServerError'
import { validateObject } from '../services/returnServerError'

export function registerBill( billData: dbModels.Bill) {
	let bill: MongoModel = new MongoModel('bill');
	let deferred = Q.defer();
	
	console.log(billData);

	let baseBillData: dbModels.Bill = {
        subtotal : billData.subtotal,
        iva : billData.iva,
        total : billData.total
	};

	bill.insertOne(baseBillData).then( ( respBillData: dbModels.Bill ) => {
		deferred.resolve(respBillData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function getBillById(billId: string) {

	let bill: MongoModel = new MongoModel('bill');
	let deferred = Q.defer();

	bill.findById(billId).then( ( respBillData: dbModels.Bill ) => {
		deferred.resolve(respBillData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}