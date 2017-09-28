(function () {
  'use strict';

  angular.module('CondorUi.autenticacion')
    .config(appRun);

  /* @ngInject */
  function appRun($stateProvider) {

    var loginState = {
      name : 'login',
      url : '/login',
      templateUrl: 'app/autenticacion/index.html',
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

    var logoutState = {
      name : 'logout',
      url  : '/logout',
      controller : 'LogoutController'
    }
    $stateProvider.state(loginState);
    $stateProvider.state(logoutState);
  }

})();
