(function () {
  'use strict';
  angular.module('CondorUi.layout')
    .directive('sidebarDirective', sidebarDirective);

  function sidebarDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/layout/sidebar.html',
      controller: 'SidebarController'
    }
  }
})();
