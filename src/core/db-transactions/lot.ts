import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../../core/services/returnServerError'

export function registerLot( lotData: dbModels.Lot) {
	let lot: MongoModel = new MongoModel('lot');
	let deferred = Q.defer();

	let baseLotData: dbModels.Lot = {
		classification : lotData.classification,
        locationId : lotData.locationId
	};

	lot.insertOne(baseLotData).then( ( respLotData: dbModels.Lot ) => {
		deferred.resolve(respLotData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

