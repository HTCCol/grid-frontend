(function () {
  'use strict'

  angular.module('CondorUi.core')
    .factory('Auth', auth)

  auth.$inject = ['$http', 'jwtHelper']

  function auth ($http, jwtHelper) {

    return {
      logout: function (success) {
        localStorage.clear();
        success()
      }
    }
  }

})()
