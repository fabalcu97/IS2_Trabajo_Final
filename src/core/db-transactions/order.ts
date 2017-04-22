import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../../core/services/returnServerError'

export function registerOrder( orderData: dbModels.Order) {
	let order: MongoModel = new MongoModel('order');
	let deferred = Q.defer();

	let baseOrderData: dbModels.Order = {
		idBill : orderData.idBill,
        idGuide : orderData.idGuide,
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
