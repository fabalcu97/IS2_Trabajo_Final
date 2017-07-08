import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../../core/services/returnServerError'
import { validateObject } from '../services/returnServerError'

export function registerGuide( guideData: dbModels.RemissionGuide) {
	let guide: MongoModel = new MongoModel('remissionGuide');
	let deferred = Q.defer();

	let baseGuideData: dbModels.RemissionGuide = {
		reason : guideData.reason,
		addressee : guideData.addressee,
		departureDate : guideData.departureDate,
		arrivalDate : guideData.arrivalDate,
		transportCompany : guideData.transportCompany,
		vehiclePlate : guideData.vehiclePlate,
		totalWeight : guideData.totalWeight
	};

	//Begin validate
	let validate = validateObject(baseGuideData);

	if (!validate.flag) {

		deferred.reject(validate.error);
		return deferred.promise;
	}
	//End validate

	guide.insertOne(baseGuideData).then( ( respGuideData: dbModels.Order ) => {
		deferred.resolve(respGuideData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function getGuideById(guideId: string) {

	let guide: MongoModel = new MongoModel('remissionGuide');
	let deferred = Q.defer();

	guide.findById(guideId).then( ( respGuideData: dbModels.RemissionGuide ) => {
		deferred.resolve(respGuideData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}
