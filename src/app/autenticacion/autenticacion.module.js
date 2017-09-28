(function () {
  'use strict';
  angular.module('CondorUi.autenticacion',[])
    .run(function (logger) {
      logger.debug('CondorUi Login is Ready');
    });
})();
