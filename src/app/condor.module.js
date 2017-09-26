(function () {
  'use strict';
  angular.module('CondorUi', [
    'CondorUi.config',
    'CondorUi.core',
    'CondorUi.login',
    'CondorUi.dashboard'
  ])
    .run(function (logger) {
      logger.success('CondorUi is Ready');
    });
})();
