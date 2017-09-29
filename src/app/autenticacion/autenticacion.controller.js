(function () {
  'use strict'
  angular.module('CondorUi.autenticacion')
    .controller('LoginController', ['$scope', '$location', '$http', 'jwtLoginService', 'logger', LoginController])
    .controller('LogoutController', ['$location', 'logger', 'Auth', LogoutController]);

  /* @ngInject */
  function LoginController($scope, $location, $http, jwtLoginService, logger) {

    $scope.required = true

    $scope.login = function (usuario) {

      jwtLoginService.login(usuario).then(function (response) {

        logger.success('Bienvenido a Condor UI')

        var token = response.data.token

        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(response.data.user));

        console.log(response.data)

        $location.path('/dashboard')

      }, function () {

        logger.error('Login Incorrecto')

        $scope.usuario.password = null

      })
    };
  };

  /* @ngInject */
  function LogoutController($location, logger, Auth) {
    Auth.logout(function () {
      $location.path('/login');
      logger.debug('Sesion Cerrada');
    });
  };

})()
