(function () {
  'use strict';
  angular.module('CondorUi', [
    'CondorUi.config',
    'CondorUi.core',
    'CondorUi.login',
    'CondorUi.dashboard',
    'CondorUi.tareas'
  ])
    .run(function (logger) {
        logger.debug('CondorUi is Ready');
    });
})();
