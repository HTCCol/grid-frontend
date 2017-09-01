(function () {
  'use strict';
  angular.module('CondorUi.core', [
    'ui.router'  // Angular flexible routing
  ])
    .run(function () {
      console.log('CondorUi Core is Ready');
    });
})();
