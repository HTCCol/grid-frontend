(function () {
  'use strict';

  angular.module('CondorUi.usuario')
    .factory('usuarioService', usuarioService);

  usuarioService.$inject = ['$http', 'logger', 'ENV_VARS'];

  function usuarioService($http, logger, ENV_VARS) {
    var service = {
      getUsuario   : getUsuario,
      updateUsuario: updateUsuario
    }

    return service;

    function getUsuario() {
      return JSON.parse(localStorage.getItem('usuario'));
    }

    function updateUsuario() {

    }
  }

})()
