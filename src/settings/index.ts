
// Define interface
    interface Configuration {
        server?: {
        	port: number
        };
        dbConfig?: {
            domain: string;
            port: number;
            username: string;
            password: string;
            dbname: string;
            url: string;
        }
        email?: {
            email: string;
            password: string;
        }
    }

// Setup
    let config: Configuration = {};

    // Server
    config.server = require('./server.json');

    // Database
    config.dbConfig = require('./db-config.json');
    config.dbConfig.url = 'mongodb://'+config.dbConfig.username+':'+config.dbConfig.password+'@'+
	    config.dbConfig.domain+':'+config.dbConfig.port+'/'+config.dbConfig.dbname;

// Export
    export default config;