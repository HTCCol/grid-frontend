(function () {
  'use strict';

  angular.module('CondorUi.autenticacion')
    .factory('jwtLoginService', jwtLoginService);

  jwtLoginService.$inject = ['$http', 'ENV_VARS'];

  function jwtLoginService ($http, ENV_VARS) {
    var loginFactory = {};

    loginFactory.login = function (user) {

      return $http({
        method: 'POST',
        skipAuthorization: true,
        url: ENV_VARS.apiUrl + '/login',
        data: user
      })

    }

    return loginFactory;

  }

})()
