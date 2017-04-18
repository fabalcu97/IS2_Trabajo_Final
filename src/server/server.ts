import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as http from 'http';
import * as https from 'https';
import * as morgan from 'morgan';
import { connectDatabase, MongoModel } from '../core/classes/MongoModel';
import { setupRouters } from './routers/index';
import { config } from '../settings/index';

// Server setup
	export let server = express();
	var httpServer = http.createServer(server);

// Setup middleware
	server.use(morgan(':method :url :status || :res[content-length] - :response-time ms'));
	server.use(bodyParser.urlencoded({ extended: false }));
	server.use(bodyParser.json());
	server.use(cookieParser());

// Setup Server
	setupRouters(server);
	
// Start function
	export function startServer (): any {
		httpServer.listen(config.server.port, function () {
			console.log('Serving api at '+config.server.domain+':'+config.server.port);
		});
		return { http: httpServer, https: null, express: server }
	}
