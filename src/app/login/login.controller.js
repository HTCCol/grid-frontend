(function () {
  'use strict'
  angular.module('CondorUi.login')
    .controller('LoginController', ['$scope', '$location', '$http', 'jwtLoginService', 'logger', LoginController])
    .run(function () {
      console.log('CondorUi Login is Ready')
    })

  /* @ngInject */
  function LoginController ($scope, $location, $http, jwtLoginService, logger) {

    $scope.required = true

    $scope.login = function (user) {

      jwtLoginService.login(user).then(function (response) {

        logger.success('Bienvenido a Condor UI')

        var token = response.data.token

        localStorage.setItem('token', token)

        $location.path('/dashboard')

      }, function () {

        logger.error('Login Incorrecto')
        $scope.user.password = null

      })
    }

  }
})()
