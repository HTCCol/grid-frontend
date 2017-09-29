(function () {
  'use strict';
  angular.module('CondorUi', [
    'CondorUi.config',
    'CondorUi.core',
    'CondorUi.autenticacion',
    'CondorUi.layout',
    'CondorUi.dashboard',
    'CondorUi.tareas',
    'CondorUi.usuario'
  ])
    .run(function (logger) {
        logger.debug('CondorUi is Ready');
    });
})();
