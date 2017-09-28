(function () {
  'use strict';
  angular.module('CondorUi.tareas', [])
    .run(function (logger) {
      logger.debug('CondorUi Tareas is Ready');
    });
})();
