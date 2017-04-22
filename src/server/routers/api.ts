/**
 * Created by fabalcu97 on 13/04/17.
 */

import { ExpressRouter } from '../../core/classes/ExpressRouter';
import { MongoModel } from '../../core/classes/MongoModel';
import { config } from '../../settings/index';
import * as variables from '../../settings/variables';
import * as dbModels from '../../core/db-models/models'

export let apiRoutes: ExpressRouter;

apiRoutes = new ExpressRouter();

apiRoutes.addRoute('POST', '/addperson', (req, res) => {

	let personModel: MongoModel = new MongoModel('Person');
	let person: dbModels.Person;
	person = req.body.person;
	if( 
		variables.EMAIL_REGEX.test(person.email) &&
		variables.SEX_REGEX.test(person.sex) &&
		variables.NAME_REGEX.test(person.name)
	){
		personModel.insertOne(person).then( (data) => {
			res.status(200);
			res.send(data);
			res.end();
		}).catch((err) => {
			res.send(err);
			res.end();
		});
	}

});

apiRoutes.addRoute('POST', '/addorder', (req, res) => {

	let personModel: MongoModel = new MongoModel('Person');
	let person: dbModels.Person;
	person = req.body.person;
	if(
		variables.EMAIL_REGEX.test(person.email) &&
		variables.SEX_REGEX.test(person.sex) &&
		variables.NAME_REGEX.test(person.name)
	){
		personModel.insertOne(person).then( (data) => {
			res.status(200);
			res.send(data);
			res.end();
		}).catch((err) => {
			res.send(err);
			res.end();
		});
	}

});