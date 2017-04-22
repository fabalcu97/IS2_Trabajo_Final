// External modules
	var gulp = require('gulp-param')(require('gulp'), process.argv);
	var shell = require('shelljs');
	var path = require('path');
	var open = require('open');
	var runSequence = require('run-sequence');
	var ts = require('gulp-typescript');
	var package = require('./package.json');
	var tsconfig = require('./tsconfig.json');
	var fs = require('fs-extra');
	var replace = require("replace");

/**
 * Items
 */

    // Webapps
		var webappsDir = 'src/server/webapps/';
		var webappsEntries = fs.readdirSync(path.join(__dirname, webappsDir));
		webappsEntries = webappsEntries.filter(function (entry) {
			var ignore = [
				'.seed'
			];
			for (var i = 0; i < ignore.length; i++) {
				if (ignore[i] === entry) {
					return;
                }
			}
			return entry;
		});
		webappsEntries.forEach(function (entryName) {
			var entryPath = path.join(__dirname, webappsDir, entryName);

			gulp.task('webapp[' + entryName + ']:build', function () {
				shell.exec('sh -c \'cd ' + entryPath + ' && webpack\'');
			});

			gulp.task('webapp['+entryName+']:install', function () {
				shell.exec('sh -c \'cd ' + entryPath + ' && npm install\'');
			});

		});
		gulp.task('webapps:build', function () {
			runSequence(webappsEntries.map(function (entryName) {
				return 'webapp[' + entryName + ']:build';
			}));
		});
		gulp.task('webapps:install', function () {
			runSequence(webappsEntries.map(function (entryName) {
				return 'webapp['+entryName+']:install';
			}));
		});
		gulp.task('webapps:new', function(name) {
            if (!name) {
				return;
            }
			var seedWebappPath = path.join(__dirname, 'src/server/webapps/.seed');
			var webappPath = path.join(__dirname, 'src/server/webapps/', name);
			fs.copySync(seedWebappPath, webappPath);

			console.log('Installing webapp dependencies');
			shell.exec('sh -c \'cd ' + webappPath + ' && npm install\'');
            console.log('Webapp created..');
		});

	// Test
		gulp.task('test:build', function () {
            return shell.exec('node_modules/.bin/webpack');
        });
		gulp.task('start:test', function () {
			return shell.exec('node_modules/.bin/mocha ./dist/test.bundle.js');
		});

	// Servers
		gulp.task('start:server', function () {
			require('./dist/server.bundle.js');
		});
        gulp.task('servers:build', function () {
            return shell.exec('node_modules/.bin/webpack');
        });
        gulp.task('servers:start', function () {
			runSequence([
				'start:server'
			])
		});

/**
 * Global actions
 */

	// Build
		gulp.task('build', function () {
			runSequence([
                'webapps:install',
                'webapps:build',
				'servers:build'
			]);
		});
	// Test
		gulp.task('run:test', function () {
			runSequence([
				'test:build',
				'start:test'
			]);
		});
	// Serve
		gulp.task('serve', function (build, buildAll) {
			var sequence = [];
			if (build || buildAll) {
				sequence.push('servers:build');
			}
			if (buildAll) {
				sequence.push('webapps:build');
			}
			sequence.push('servers:start');
			runSequence(sequence);
		});
	
	// Init
		gulp.task('init', function () {
			runSequence([
				'build'
			]);
		});