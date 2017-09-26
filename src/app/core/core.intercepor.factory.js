(function () {
  'use strict'

  angular.module('CondorUi.core')
    .factory('httpErrorResponseInterceptor', interceptor)

  interceptor.$inject = ['$q', '$location']

  function interceptor ($q, $location) {
    return {
      request: function (config) {
        config.headers = config.headers || {}
        var token = localStorage.getItem('token')
        if (token) {
          config.headers.Authorization = 'Bearer ' + token
        }
        return config
      },
      response: function (responseData) {
        return responseData
      },
      responseError: function error (response) {
        switch (response.status) {
          case 401:
            $location.path('/login')
            break
          case 404:
            $location.path('/404')
            break
        }
        return $q.reject(response)
      }
    }
  }

})()
