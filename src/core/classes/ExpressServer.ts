import * as express from 'express';
import * as q from 'q';
import * as Morgan from 'morgan';
import * as bodyParser from 'body-parser';

export class ExpressServer {

    // Attributes
        server: express.Express; 

    // Methods
        constructor () {
            this.server = express();
	        this.server.use(Morgan(':method :url :status || :res[content-length] - :response-time ms'));
	        this.server.use(bodyParser.urlencoded({ extended: false }));
	        this.server.use(bodyParser.json());
        }

        public use (middle: any) {
            this.server.use(middle);
        }

		public useRouter (path: string, middle: any) {
			this.server.use(path, middle);
		}

        public setupStatics (route: string, staticsPath: any) {
            this.server.use(route, express.static(staticsPath));
        }

        public listen (port: number) {
            var deferred = q.defer();
            this.server.listen(port, deferred.resolve);
            return deferred.promise;
        }


}