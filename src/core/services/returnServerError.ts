// Imports
import {Error} from '../interface/Error';

// Exports
export function returnServerError (deferred: any) {
	return function (serverError: any) {
		let error: Error = {
			httpStatus: (serverError.httpStatus || 500),
			description: (serverError.description || 'Internal error'),
			error: (serverError.error || serverError)
		};
		deferred.reject(error);
	}
}

export function validateObject(objectToValidate: Object): any {  	
	let flag: boolean = true;
	let error = {};

	for (var key in objectToValidate) {
		if (objectToValidate[key] === null || objectToValidate[key] === "" || objectToValidate[key] === undefined){
			console.log(key, ': ', objectToValidate[key]);
			flag = false;
		}
	}

	if(!flag){
		error = {
			httpStatus: (400),
			description: ('Parameters error'),
		};
	}

	return {flag: flag, error: error};
}
