angular.module('starter')
.service('serviceItem', function($http){

	var urlRecInfo = 'http://marcelooliveira.esy.es/webservice-appCursoAlura/listaDeItens.json';

	var urlEnvInfo = 'http://marcelooliveira.esy.es/webservice-appCursoAlura/finalizarCompra.php';

	return {
		obterLista : function() {
			return $http.get(urlRecInfo).then(function(response){
				return response.data;
			});
		},

		efetuarCompra : function(dados) {
			return $http.post(urlEnvInfo, dados).then(function(response){
				return response.data;
			});
		}


	}
});