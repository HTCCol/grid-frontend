(function () {
  'use strict';
  angular.module('CondorUi.usuario')
    .controller('EditUsuarioController', ['$scope', '$location', '$http', 'logger', 'usuarioService', EditUsuarioController]);

  /* @ngInject */
  function EditUsuarioController($scope, $location, $http, logger, usuarioService){

    var vm = this;

    vm.usuario = usuarioService.getUsuario();

    $scope.navBarTitle = "Perfil";
    $scope.url = "perfil";

  }
})();
