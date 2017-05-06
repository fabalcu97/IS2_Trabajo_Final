/**
 * Created by fabalcu97 on 13/04/17.
 */

import {ExpressRouter} from '../../core/classes/ExpressRouter';
import * as path from 'path';
import * as fs from 'fs';
import * as express from 'express';
import { config } from '../../settings/index';

export let webappsRoutes: ExpressRouter;

webappsRoutes = new ExpressRouter();

let webappsDir = '../src/server/webapps/';
let webappsEntries = fs.readdirSync(path.join(__dirname, webappsDir));
webappsEntries = webappsEntries.filter(function (entry) {
	let ignore = [
		'.seed'
	];
	for (let i = 0; i < ignore.length; i++) {
		if (ignore[i] == entry) return;
	}
	return entry;
});


webappsRoutes.addRoute('GET', '/', (req, res) => {
	res.sendFile(path.join(__dirname, webappsDir, 'home', 'src/index.html'));
});


webappsEntries.forEach( (webapp) => {
	let tmpRoute: string = '/' + webapp;

	webappsRoutes.router.use(tmpRoute, express.static(path.join(__dirname, webappsDir, webapp, 'src/dist')));

	webappsRoutes.addRoute('GET', tmpRoute, (req, res) => {
		res.sendFile(path.join(__dirname, webappsDir, webapp, 'src/index.html'));
	});

});
