(function(){
	'use strict';
	
	angular
	.module('myapp')
	.controller('usuarioController', usuarioController);
	
	usuarioController.$inject = ['usuarioAPI','$scope','$location', '$rootScope', '$timeout', ];
	
	function usuarioController(usuarioAPI,$scope, $location, $rootScope, $timeout){

		$scope.getUsuario = function(nomeusuario){
			usuarioAPI.getUsuario(nomeusuario)
				.then(function(resposta){
				$rootScope.paginacao = false;
				$scope.user = resposta.data;
				$scope.anotacao = '';
				$scope.anotacaoExistente($scope.user.id);
				$scope.getRepositorio(nomeusuario);
			},function (reposta) {
                    var status = reposta.status;
                    if (status == 404){
                       $location.url('/404');
                    }
             });
		}

		$scope.getRepositorio = function(nomeusuario){
            usuarioAPI.getRepositorio(nomeusuario)
                .then(function(resposta){
                    $scope.repositorios = resposta.data;
                });
        }

        function time() {
            $scope.gravacao=false
        };

        $scope.setAnotacao = function(id, anotacao){
            usuarioAPI.setAnotacao(id, anotacao);
            $scope.anotacaoExistente(id);
            $scope.gravacao = true;
            $timeout(time, 3000);
        };

        $scope.anotacaoExistente = function(id){
            $scope.anotacao = usuarioAPI.getAnotacao(id);

        };
	}
})()