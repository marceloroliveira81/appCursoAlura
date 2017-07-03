angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('listagem');

$stateProvider

.state('listagem', {
	url : '/listagem',
	templateUrl : 'templates/listagem.html',
	controller : 'controllerLista'
})

.state('itemSelecionado', {
	url : '/itemSelecionado/:item',
	templateUrl : 'templates/itemSelecionado.html',
	controller : 'controllerItemSelecionado'
})

.state('finalizar', {
	url : '/finalizar/:itemSelecionado',
	templateUrl : 'templates/finalizar.html',
	controller : 'controllerFinalizar'
})

})