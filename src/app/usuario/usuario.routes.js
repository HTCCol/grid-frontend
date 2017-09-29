(function () {
  'use strict';

  angular.module('CondorUi.usuario')
    .config(appRun);

  /* @ngInject */
  function appRun($stateProvider) {

    var profiledState = {
      name: 'perfil',
      url: '/perfil',
      templateUrl: 'app/usuario/perfil.html',
      controller: 'EditUsuarioController',
      controllerAs: 'vm'
    }

    $stateProvider.state(profiledState)
  }

})();
