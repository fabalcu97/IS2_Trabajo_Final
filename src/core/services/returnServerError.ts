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