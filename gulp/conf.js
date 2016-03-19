/**
 * Created by Anheru88 on 18/03/2016.
 */

/*
 * Este archivo contiene las variables usadas en otros archivos de gulp.
 * Por diseño, solo se pondran los valores que seran muy genericos para las
 * las otras tareas de gulp
 *
 */

var gutil = require('gulp-util');

/**
 * Carpetas por defecto del proyecto
 *
 * @type {{src: string, dist: string, tmp: string, e2e: string}}
 */
exports.paths = {
	src: 'src',
	dist: 'dist',
	tmp: '.tmp',
	e2e: 'e2e'
};

/**
 * Implementacion común que se ejecuta cuando ocurre un error
 * en algun plugin de Gulp
 *
 * @param title
 * @returns {Function}
 */
exports.errorHandler = function(title) {
	'use strict';

	return function(err) {
		gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
		this.emit('end');
	};
};
