'use strict';

(function () {
        var login = angular.module('loginmodule', ['angular-jwt']);

        login.controller('loginController', function ($scope, jwt_loginService, $location) {

                $scope.login = function (user) {
                        jwt_loginService.login(user).then(function (result) {
                                var token = result.data.token;
                                localStorage.setItem('token', token);
                                $location.path('/home');
                        },function(){
                                $scope.user.password = null;
                                Materialize.toast('Error de autenticación. Verifique los datos.', 4000, 'rounded');
                        });
                }
        });

        login.factory('jwt_loginService', function ($http, getServerName) {
                var loginSvc = {};
                loginSvc.login = function (user) {

                        return $http({
                                method: "POST",
                                skipAuthorization: true,
                                url: getServerName + "/api-token-auth/",
                                data: user
                        });
                };
                return loginSvc;
        });


})();
