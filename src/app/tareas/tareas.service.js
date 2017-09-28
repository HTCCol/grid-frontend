(function () {
  'use strict'

  angular.module('CondorUi.tareas')
    .factory('tareaService', tareaService)

  tareaService.$inject = ['$http', 'ENV_VARS']

  function tareaService ($http, ENV_VARS) {
    var requestSvc = {}

    requestSvc.getTareas = function () {

      return $http({
        ethod: "GET",
        skipAuthorization: false,
        url: ENV_VARS.apiUrl + '/tarea'
      });
    };

    requestSvc.createTarea = function (homework) {
      return $http({
        method: "POST",
        skipAuthorization: false,
        url: ENV_VARS.apiUrl + '/tarea',
        data: homework
      })
    };

    return requestSvc;

  }

})()
