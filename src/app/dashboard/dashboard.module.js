(function () {
  'use strict';
  angular.module('CondorUi.dashboard', [
    'CondorUi.core'
  ])
    .run(function () {
      console.log('CondorUi Dashboard is Ready');
    });
})();
