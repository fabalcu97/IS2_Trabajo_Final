import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../../core/services/returnServerError'

export function registerOrder( orderData: dbModels.Order) {
	let order: MongoModel = new MongoModel('order');
	let deferred = Q.defer();

	let baseOrderData: dbModels.Order = {
		billId : orderData.billId,
		output : orderData.output,
        guideId : orderData.guideId,
        bulkControl : false,
        arrivalDate : orderData.arrivalDate,
        received : false,
        late : false
	};

	order.insertOne(baseOrderData).then( ( respOrderData: dbModels.Order ) => {
		deferred.resolve(respOrderData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function getOrderById(orderId: string) {

	let order: MongoModel = new MongoModel('order');
	let deferred = Q.defer();

	order.findById(orderId).then( ( respOrderData: dbModels.Order ) => {
		deferred.resolve(respOrderData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function getOrderByBillId (billId: String) {
	let order: MongoModel = new MongoModel('order');
	let deferred = Q.defer();

	order.findOne({
		billId: billId
	}).then( ( respOrderData: dbModels.Order ) => {
		deferred.resolve(respOrderData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function updateBulkControlOrder(orderId : string , OrderBulkControl : boolean)
{
	let order : MongoModel = new MongoModel('order');
	let deferred = Q.defer();

	order.updateOne(orderId,{
		$set:{bulkControl:OrderBulkControl}
	}).then( ( respOrderData : dbModels.Order ) => {
		deferred.resolve(respOrderData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function updateArrivalDateOrder(orderId : string , OrderArrivalDate : number)
{
	let order : MongoModel = new MongoModel('order');
	let deferred = Q.defer();

	order.updateOne(orderId,{
		$set:{arrivalDate:OrderArrivalDate}
	}).then( ( respOrderData : dbModels.Order ) => {
		deferred.resolve(respOrderData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}


export function updateReceivedOrder(orderId : string , OrderReceived : boolean)//(idOrder,Recibido|noRecibido)
{
	let order : MongoModel = new MongoModel('order');
	let deferred = Q.defer();

	order.updateOne(orderId,{
		$set:{received:OrderReceived}
	}).then( ( respOrderData : dbModels.Order ) => {
		deferred.resolve(respOrderData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}



export function updateLateOrder(orderId : string , OrderLate : boolean)//(idOrder,tarde|temprano)
{
	let order : MongoModel = new MongoModel('order');
	let deferred = Q.defer();

	order.updateOne(orderId,{
		$set:{late:OrderLate}
	}).then( ( respOrderData : dbModels.Order ) => {
		deferred.resolve(respOrderData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}