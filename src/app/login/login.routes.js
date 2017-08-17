(function () {
  'use strict';

  angular.module('CondorUi.login')
    .config(appRun);

  /* @ngInject */
  function appRun($stateProvider, $urlRouterProvider) {

    // Set default state
    $urlRouterProvider.otherwise("/login");

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html'
    });
  }

})();
