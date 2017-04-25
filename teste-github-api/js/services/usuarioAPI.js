(function(){
	'use strict';
	angular
	.module('myapp')
	.factory('usuarioAPI', usuarioAPI);

	usuarioAPI.$inject = ['$http']

	function usuarioAPI($http){
		var baseUrl = 'https://api.github.com/users/';
        var anotacoes ={};
		var _getUsuario = function(usuario){
			return $http.get(baseUrl + usuario);
		};

        var _getRepositorio = function(usuario){
            return $http.get(baseUrl + usuario + '/repos');
        };

        var _getAnotacao = function(id){
        	if(localStorage.getItem('anotacao') !== null){
        		var anotacao = JSON.parse(localStorage.getItem('anotacao'));
            	return anotacao[id];
            }

		};

        var _setAnotacao = function (id, anotacao) {
            anotacoes[id] = anotacao;
            return localStorage.setItem('anotacao', JSON.stringify(anotacoes));
        }

		return{
            getUsuario: _getUsuario,
            getRepositorio: _getRepositorio,
			getAnotacao: _getAnotacao,
			setAnotacao: _setAnotacao
		}
	}
})()

