import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../../core/services/returnServerError'

export function registerGuide( guideData: dbModels.RemissionGuide) {
	let guide: MongoModel = new MongoModel('remissionGuide');
	let deferred = Q.defer();

	let baseGuideData: dbModels.RemissionGuide = {
		date : guideData.date,
		reason : guideData.reason,
		departure : guideData.departure,
		arrival : guideData.arrival,
		addressee : guideData.addressee,
		departureDate : guideData.departureDate,
		arrivalDate : guideData.arrivalDate,
		transportCompany : guideData.transportCompany,
		vehiclePlate : guideData.vehiclePlate,
		totalWeight : guideData.totalWeight
	};

	guide.insertOne(baseGuideData).then( ( respGuideData: dbModels.Order ) => {
		deferred.resolve(respGuideData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}
