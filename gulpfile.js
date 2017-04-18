// External modules
	var gulp = require('gulp-param')(require('gulp'), process.argv);
	var shell = require('shelljs');
	var path = require('path');
	var open = require('open');
	var runSequence = require('run-sequence');
	var tsconfig = require('./tsconfig.json');
	var fs = require('fs-extra');
	var replace = require("replace");
	var webapps = ['rest-tester'];

/**
 * Items
 */

	// Webapps
        gulp.task('webapps:init', function() {
            webapps.forEach( function(webapp) {
                shell.exec('cd ./src/server/webapps/' + webapp + ' && npm install && webpack');
            });
        });

        gulp.task('webapps:build', function() {
            webapps.forEach( function(webapp) {
                shell.exec('cd ./src/server/webapps/' + webapp + ' && webpack');
            });
        });

	// Servers
		gulp.task('server:start', function () {
			require('./dist/server.bundle.js');
		});
		gulp.task('server:build', function () {
			return shell.exec('node_modules/.bin/webpack');
		});

/**
 * Global actions
 */

	// Build
		gulp.task('build', function () {
			runSequence([
				'webapps:init',
				'server:build'
			]);
		});

	// Serve
		gulp.task('serve', function (build, buildAll) {
			var sequence = [];
			if (build || buildAll) {
				sequence.push('server:build');
			}
			if (buildAll){
				sequence.push('webapps:build');
			}
			sequence.push('server:start');
			runSequence(sequence);
		});

	// Init
		gulp.task('init', function () {
			runSequence([
				'build'
			]);
		});