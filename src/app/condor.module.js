(function () {
  'use strict';
  angular.module('CondorUi', [
    'CondorUi.core',
    'CondorUi.login'
  ])
    .run(function () {
      console.log('CondorUi is Ready');
    });
})();
