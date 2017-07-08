import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../services/returnServerError'
import { validateObject } from '../services/returnServerError'
import * as codeGenerator from 'randomstring';

export function getCode(codeInfo: any) {
  
  let code: MongoModel = new MongoModel('code');
	let deferred = Q.defer();

  if(!codeInfo.type || (codeInfo.type !== 'emitter' && codeInfo.type !== 'receptor') ) {
    deferred.reject({
      httpStatus: 401,
      description: 'Type required'
    });
    return deferred.promise;
  }

  let baseCode: dbModels.Code = {
    code: codeGenerator.generate(12),
    type: codeInfo.type,
    used: false
  }

	code.insertOne(baseCode).then((respCode: dbModels.Code) => {
		deferred.resolve(respCode);
	}).catch( () => {
		returnServerError(deferred);
	});
	return deferred.promise;
}

export function updateCode(codeInfo: any) {
  
  let code: MongoModel = new MongoModel('code');
  let deferred = Q.defer();
  let codeId: string;

  code.findOne({
    code: codeInfo.code
  }).then((respData: dbModels.Code) => {

    if(respData.used) {
      deferred.reject({
        httpStatus: 401,
        description: 'Used code'
		  });
      return deferred.promise;
    }

    codeId = respData.id;

    code.updateOne(codeId, {$set:{used: true}}).then((respData) => {

      deferred.resolve(respData);

    }).catch( () => {
      returnServerError(deferred);
    });

  }).catch( () => {
		returnServerError(deferred)
	});

  return deferred.promise;
}