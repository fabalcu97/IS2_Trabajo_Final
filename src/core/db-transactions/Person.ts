import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../services/returnServerError'
import { validateObject } from '../services/returnServerError'

export function registerPerson(personData: dbModels.Person) {
  let person: MongoModel = new MongoModel('person');
	let deferred = Q.defer();

	let basePersonData: dbModels.Person = {
    name: personData.name,
    email: personData.email,
    password: personData.password,
    type: personData.type,
    username: personData.username
	};

	//Begin validate
	let validate = validateObject(basePersonData);

	if (!validate.flag) {

		deferred.reject(validate.error);
		return deferred.promise;
	}
	//End validate

	person.findAll({username: basePersonData.username}).then((respPersonData: dbModels.Person) => {
		if(respPersonData.username === basePersonData.username) {
			deferred.reject({
        httpStatus: 401,
        description: 'Username already taken'
		  });
			return deferred.promise;	
		}
		person.insertOne(basePersonData).then( (respPersonData: dbModels.Person ) => {
			deferred.resolve(respPersonData);
		}).catch( () => {
			returnServerError(deferred)
		});
	}).catch( () => {
		returnServerError(deferred)
		return deferred.promise;
	});

	return deferred.promise;
}

export function validateUser(personData: any) {
	let person: MongoModel = new MongoModel('person');
	let deferred = Q.defer();

	let basePersonData = {
    username: personData.username,
    password: personData.password
	};

	//Begin validate
	let validate = validateObject(basePersonData);

	if (!validate.flag) {

		deferred.reject(validate.error);
		return deferred.promise;
	}
	//End validate

	person.findOne({
		username: personData.username
	}).then((resp: dbModels.Person) => {
		if(basePersonData.password === resp.password){
			deferred.resolve(resp);
		}
	}).catch((err) => {
		returnServerError(deferred)
		return deferred.promise;
	});
	
	return deferred.promise;
}