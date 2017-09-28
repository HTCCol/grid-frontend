(function () {
  'use strict';

  angular.module('CondorUi.login')
    .config(appRun);

  /* @ngInject */
  function appRun($stateProvider) {

    var loginState = {
      name : 'login',
      url : '/login',
      templateUrl: 'app/login/index.html',
      controller: 'LoginController',
      resolve: {
        verifyToken: function ($location, jwtHelper) {
          var token = localStorage.getItem('token');
          if (token && !jwtHelper.isTokenExpired(token)) {
            $location.path("/dashboard");
          }
        }
      }
    }

    $stateProvider.state(loginState);
  }

})();
