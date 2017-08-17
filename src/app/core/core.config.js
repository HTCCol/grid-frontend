(function () {
  'use strict';
  angular
    .module('CondorUi.core')
    .config(configure);

  /* @ngInject */
  function configure($locationProvider) {
    if (window.history && window.history.pushState) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }
  }
})();
