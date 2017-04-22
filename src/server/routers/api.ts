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
	let respData = {
		orderData: {},
		billData: {},
		guideData: {},
		detailData: []
	};
    Order.registerOrder(req.body.order).then( (orderData) => {
		respData.orderData = orderData;
		Bill.registerBill(req.body.bill).then( (billData) => {
			respData.billData = billData;
			Guide.registerGuide(req.body.guide).then( (guideData) => {
				respData.guideData = guideData;
				let arrDetail: dbModels.Detail[] = req.body.details;
				arrDetail.forEach((element) => {
					Detail.registerDetail(element).then( (detailData) => {
						respData.detailData.push(detailData);
					}).catch((err) => {
						res.status(err.httpStatus);
						res.send(err.description);
						res.end();
					});
				});
			}).catch( (err) => {
				res.status(err.httpStatus);
				res.send(err.description);
				res.end();
			});

		}).catch( (err) => {
			res.status(err.httpStatus);
			res.send(err.description);
			res.end();
		});
	}).catch( (err) => {
		res.status(err.httpStatus);
		res.send(err.description);
		res.end();
	});

	res.status(200);
	res.send(respData);
	res.end();
});

apiRoutes.addRoute('POST', '/get/order', (req, res) => {
	
	Order.getOrderById(req.body.orderId)
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

apiRoutes.addRoute('POST', '/get/bill', (req, res) => {
	
	Bill.getBillById(req.body.billId)
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

apiRoutes.addRoute('POST', '/get/guide', (req, res) => {
	
	Guide.getGuideById(req.body.remissionGuideId)
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

apiRoutes.addRoute('GET', '/get/detail', (res, req) => {
	Detail.getDetailByBillId(req.body).then( (data) => {
		res.status(200);
		res.send(data);
		res.end();
	}).catch( (err) => {
		res.status(err.httpStatus);
		res.send(err.description);
		res.end();
	});
});