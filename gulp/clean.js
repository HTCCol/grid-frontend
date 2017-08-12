/**
 * Archivo de configuracion de gulp que borra todas
 * las carpetas que no son necesarias antes de compilar o
 * realizar alguna otra tarea
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
	pattern: ['del']
});

gulp.task('clean', function () {
	return $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});