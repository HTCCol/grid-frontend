(function () {
  'use strict';
  angular
    .module('CondorUi.core')
    .config(configure);

  /* @ngInject */
  function configure($locationProvider, $httpProvider) {


    if (window.history && window.history.pushState) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }

    $httpProvider.interceptors.push(function ($location, $q, jwtHelper) {
      return {
        request: function (conf) {
          var token = localStorage.getItem('token');

          if (token && !jwtHelper.isTokenExpired(token)) {
            conf.headers.Authorization = 'Bearer ' + token;
          } else {
            localStorage.removeItem('token');
            $location.path("/login");
          }
          return conf;
        }
      }
    });
  }
})();
