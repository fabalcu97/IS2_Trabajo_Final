import { ExpressRouter } from '../../core/classes/ExpressRouter';
import * as path from 'path';
import * as fs from 'fs';
import * as express from 'express';
import * as session from 'express-session';
import { config } from '../../settings/index';

export let webappsRoutes: ExpressRouter;

webappsRoutes = new ExpressRouter();

let webappsDir = '../src/server/webapps/';
let webappsEntries = fs.readdirSync(path.join(__dirname, webappsDir));
webappsEntries = webappsEntries.filter(function (entry) {
	let ignore = [
		'.seed',
		'access'
	];
	for (let i = 0; i < ignore.length; i++) {
		if (ignore[i] == entry) return;
	}
	return entry;
});

webappsRoutes.router.use('/app', (req, res, next) => {
	if(!req.cookies.name || !req.cookies.type) {
		res.redirect('/access');
		res.end();
	}
	else{
		next();
	}
})

webappsRoutes.addRoute('GET', '/', (req, res) => {
	res.redirect('/app/home');
	res.end();
});

webappsRoutes.router.use('/access', express.static(path.join(__dirname, webappsDir, 'access', 'src/dist')));
webappsRoutes.addRoute('GET', '/access', (req, res) => {
	res.sendFile(path.join(__dirname, webappsDir, 'access', 'src/index.html'));
});

webappsEntries.forEach( (webapp) => {
	let tmpRoute: string = '/app/' + webapp;

	webappsRoutes.router.use(tmpRoute, express.static(path.join(__dirname, webappsDir, webapp, 'src/dist')));

	webappsRoutes.addRoute('GET', tmpRoute, (req, res) => {
		res.sendFile(path.join(__dirname, webappsDir, webapp, 'src/index.html'));
	});

});
