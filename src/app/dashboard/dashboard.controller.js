(function () {
  'use strict'
  angular.module('CondorUi.dashboard')
    .controller('DashboardController', ['$scope', '$location', '$http', 'logger', DashboardController]);

  /* @ngInject */
  function DashboardController ($scope, $location, $http, logger) {
      $scope.navBarTitle = "Dashboard";
      $scope.url = "dashboard";
  }
})()
