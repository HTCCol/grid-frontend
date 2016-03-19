/**
 * Bienvenido al archivo de configuracion de gulp
 * Las tareas de gulp estan divididas en varios archivos
 * en el directorio gulp porque ponerlos aqui hace el documento
 * muy largo y dificil de mantener.
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');


/**
 * Esto carga todos los js o coffee dentro de la carpeta gulp
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
	return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
	require('./gulp/' + file);
});

/**
 * Tarea por defecto borra archivos temporales y lanza la
 * tarea para optimizar.
 */

gulp.task('default', ['clean'], function () {
	//gulp.start('build');
});