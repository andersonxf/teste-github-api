(function(){
	'use strict';
	
	angular
	.module('myapp')
	.controller('erroCtrl', erroCtrl);

    erroCtrl.$inject = ['$scope','$location','$rootScope'];
	
	function erroCtrl($scope, $location, $rootScope){

        $scope.retornaPagina = function(){
            $location.url('/');
            $rootScope.paginacao = true;
		};
	}
})()