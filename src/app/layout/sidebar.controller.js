(function () {
  'use strict'
  angular.module('CondorUi.layout')
    .controller('SidebarController', ['$scope', SidebarController]);

  /* @ngInject */
  function SidebarController ($scope) {
    $scope.usuario = JSON.parse(localStorage.getItem('usuario'));
  }
})()
