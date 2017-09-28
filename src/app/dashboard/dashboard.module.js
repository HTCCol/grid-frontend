(function () {
  'use strict';
  angular.module('CondorUi.dashboard', [
    'CondorUi.core'
  ])
    .run(function (logger) {
      logger.debug('CondorUi Dashboard is Ready');
    });
})();
