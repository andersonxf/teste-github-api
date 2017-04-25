/**
 * Created by Sala on 22/04/2017.
 */
(function(){
    'use strict';
    angular.module("myapp").config(function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "views/pesquisa-usuario.html",
            controller: "usuarioController",
        });
        $routeProvider.when("/404", {
            templateUrl: "views/404.html",
            controller: "erroCtrl"
        });
        $routeProvider.otherwise({redirectTo: "/"});
    });
})()