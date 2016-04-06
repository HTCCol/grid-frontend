(function(){
    'use strict'

    angular.module('hpc.login')
        .config(appRun);

    /* @ngInject */
    function appRun($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");

        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html'
        })
    }

})();