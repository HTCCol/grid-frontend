(function () {
  'use strict'

  angular.module('CondorUi.core')
    .factory('Auth', auth)

  auth.$inject = ['$http', 'jwtHelper']

  function auth ($http, jwtHelper) {

    function getClaimsFromToken () {
      var token = localStorage.getItem('token')
      var user = {}
      user = jwtHelper.decodeToken(token)
      return user
    }

    var tokenClaims = getClaimsFromToken()

    return {
      login: function (data, success, error) {
        $http.post('/login', data).success(success).error(error)
      },
      logout: function (success) {
        tokenClaims = {}
        delete localStorage.removeItem('token')
        success()
      },
      getTokenClaims: function () {
        return tokenClaims
      }
    }
  }

})()
