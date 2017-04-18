
// Imports
	import { server, startServer } from './server';
	import { connectDatabase } from '../core/services/connectDatabase';
    import { config } from "../settings/index";

// Start server
	connectDatabase(config.dbConfig.url).then( () => {
		console.log('Connected to database with api server');
		var servers = startServer();
	}).catch(function (err) {
		console.error('Error connecting database', err);
	});