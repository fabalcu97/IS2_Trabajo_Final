/**
 * Created by fabalcu97 on 13/04/17.
 */

import { ExpressRouter } from '../../core/classes/ExpressRouter';
import { MongoModel } from '../../core/classes/MongoModel';
import { config } from '../../settings/index';
import * as dbModels from '../../core/db-models/models'
// import {  } from '../../core/db-transactions/order';

export let apiRoutes: ExpressRouter;

apiRoutes = new ExpressRouter();

apiRoutes.addRoute('POST', '/add/order', (req, res) => {

});