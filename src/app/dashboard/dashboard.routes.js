(function () {
  'use strict';

  angular.module('CondorUi.dashboard')
    .config(appRun);

  /* @ngInject */
  function appRun($stateProvider) {
    var dashboardState = {
      name: 'dashboard',
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html'
    }

    $stateProvider.state(dashboardState)


  }

})();
