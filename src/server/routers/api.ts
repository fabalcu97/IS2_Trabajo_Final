/**
 * Created by fabalcu97 on 13/04/17.
 */

import { ExpressRouter } from '../../core/classes/ExpressRouter';
import { MongoModel } from '../../core/classes/MongoModel';
import { config } from '../../settings/index';
import * as dbModels from '../../core/db-models/models'
import * as Order from '../../core/db-transactions/order';
import * as Bill from '../../core/db-transactions/bill';
import * as Guide from '../../core/db-transactions/guide';
import * as Detail from '../../core/db-transactions/detail';

export let apiRoutes: ExpressRouter;

apiRoutes = new ExpressRouter();

apiRoutes.addRoute('POST', '/add/order', (req, res) => {
    Order.registerOrder(req.body).then( (data) => {
		res.status(200);
		res.send(data);
		res.end();
	}).catch( (err) => {
		res.status(err.httpStatus);
		res.send(err.description);
		res.end();
	});
});

apiRoutes.addRoute('POST', '/add/bill', (req, res) => {
    Bill.registerBill(req.body).then( (data) => {
		res.status(200);
		res.send(data);
		res.end();
	}).catch( (err) => {
		res.status(err.httpStatus);
		res.send(err.description);
		res.end();
	});
});

apiRoutes.addRoute('POST', '/add/guide', (req, res) => {
    Guide.registerGuide(req.body).then( (data) => {
		res.status(200);
		res.send(data);
		res.end();
	}).catch( (err) => {
		res.status(err.httpStatus);
		res.send(err.description);
		res.end();
	});
});

apiRoutes.addRoute('POST', '/add/detail', (req, res) => {
    Detail.registerDetail(req.body).then( (data) => {
		res.status(200);
		res.send(data);
		res.end();
	}).catch( (err) => {
		res.status(err.httpStatus);
		res.send(err.description);
		res.end();
	});
});

apiRoutes.addRoute('GET', '/get/detail/:billId', (res, req) => {
	Detail.getDetailByBillId(req.params.billId).then( (data) => {
		res.status(200);
		res.send(data);
		res.end();
	}).catch( (err) => {
		res.status(err.httpStatus);
		res.send(err.description);
		res.end();
	});
});

apiRoutes.addRoute('GET', '/get/guide/:remissionGuideId', (req, res) => {
	Guide.getGuideById(req.params.remissionGuideId)
	.then( (data) => {
		res.status(200);
		res.send(data);
		res.end();
	}).catch( (err) => {
		console.log(err);
		res.status(404);
		res.end();
	})
});

apiRoutes.addRoute('GET', '/get/bill/:billId', (req, res) => {
	Bill.getBillById(req.params.billId)
	.then( (data) => {
		res.status(200);
		res.send(data);
		res.end();
	}).catch( (err) => {
		console.log(err);
		res.status(404);
		res.end();
	})
});

apiRoutes.addRoute('GET', '/get/order/:billId', (req, res) => {
	
	Order.getOrderByBillId(req.params.billId)
	.then( (data) => {
		console.log(data);
		res.status(200);
		res.send(data);
		res.end();
	}).catch( (err) => {
		console.log(err);
		res.status(404);
		res.end();
	})
});