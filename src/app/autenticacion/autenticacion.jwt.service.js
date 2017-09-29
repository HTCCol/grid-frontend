(function () {
  'use strict';

  angular.module('CondorUi.autenticacion')
    .factory('jwtLoginService', jwtLoginService);

  jwtLoginService.$inject = ['$http', 'ENV_VARS'];

  function jwtLoginService ($http, ENV_VARS) {
    var loginFactory = {};

    loginFactory.login = function (usuario) {

      return $http({
        method: 'POST',
        skipAuthorization: true,
        url: ENV_VARS.apiUrl + '/login',
        data: usuario
      })

    }

    return loginFactory;

  }

})()
