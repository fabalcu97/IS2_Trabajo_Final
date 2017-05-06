import * as Q from 'q';
import * as dbModels from '../db-models/models';
import { MongoModel } from '../classes/MongoModel';
import { Error } from '../interface/Error'
import { returnServerError } from '../../core/services/returnServerError'

export function registerProduct (productData: dbModels.Product) {
	let product: MongoModel = new MongoModel('product');
	let deferred = Q.defer();

	let baseProductData: dbModels.Product = {
        category: productData.category,
		name: productData.name,
		unitPrice: productData.unitPrice,
		unitWeight: productData.unitWeight
	};

	product.insertOne(baseProductData).then( ( respProductData: dbModels.Product ) => {
		deferred.resolve(respProductData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function getProductById (productId: string) {

	let product: MongoModel = new MongoModel('product');
	let deferred = Q.defer();

	product.findById(productId).then( ( respProductData: dbModels.Product ) => {
		deferred.resolve(respProductData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}

export function getProductByName (productName: string) {

	let product: MongoModel = new MongoModel('product');
	let deferred = Q.defer();

	product.findAll({
		name: productName
	}).then( ( respProductData: dbModels.Product ) => {
		deferred.resolve(respProductData);
	}).catch( () => {
		returnServerError(deferred)
	});
	return deferred.promise;
}