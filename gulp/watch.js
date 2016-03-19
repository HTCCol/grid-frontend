/**
 * Created by Anheru88 on 19/03/2016.
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
	return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {
	gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);

	gulp.watch([
		path.join(conf.paths.src, '/app/**/*.css'),
		path.join(conf.paths.src, '/app/**/*.stylus')
	], function(event) {
		if(isOnlyChange(event)) {

		} else {
			gulp.start('inject-reload');
		}
	});

	gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function(event) {
		if(isOnlyChange(event)) {

		} else {
			gulp.start('inject-reload');
		}
	});

	gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event) {
		browserSync.reload(event.path);
	});
});