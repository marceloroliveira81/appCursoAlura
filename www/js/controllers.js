angular.module('starter')
.controller('controllerLista', function($scope, serviceItem){
	
	serviceItem.obterLista().then(function(dados){
		$scope.listaDeItens = dados;
	})

	/*$scope.listaDeItens = [
		{nome: 'Item 1', valor: 100, detalhe: {descricao: 'Descrição Item 1'}},
		{nome: 'Item 2', valor: 1000, detalhe: {descricao: 'Descrição Item 2'}},
		{nome: 'Item 3', valor: 200.57, detalhe: {descricao: 'Descrição Item 3'}},
		{nome: 'Item 4', valor: 300, detalhe: {descricao: 'Descrição Item 4'}},
		{nome: 'Item 5', valor: 250, detalhe: {descricao: 'Descrição Item 5'}},
		{nome: 'Item 6', valor: 199, detalhe: {descricao: 'Descrição Item 6'}},
		{nome: 'Item 7', valor: 460, detalhe: {descricao: 'Descrição Item 7'}},
		{nome: 'Item 8', valor: 230, detalhe: {descricao: 'Descrição Item 8'}},
		{nome: 'Item 9', valor: 99.87, detalhe: {descricao: 'Descrição Item 9'}}
	];*/
});

angular.module('starter')
.controller('controllerItemSelecionado', function($stateParams, $scope){
	$scope.itemSelecionado =  angular.fromJson($stateParams.item);

	$scope.listaDeOpcoes = [
		{nome: 'Opção 1', valor: 200},
		{nome: 'Opção 2', valor: 300},
		{nome: 'Opção 3', valor: 500}
	];

	$scope.marcar = function(opcao, marcado){
		if(marcado) {
			$scope.itemSelecionado.valor = $scope.itemSelecionado.valor + opcao.valor;
		} else {
			$scope.itemSelecionado.valor = $scope.itemSelecionado.valor - opcao.valor;
		}
	};
});

angular.module('starter')
.controller('controllerFinalizar', function($stateParams, $scope, $ionicPopup, $state, serviceItem){
	$scope.pessoa = {};

	$scope.item =  angular.fromJson($stateParams.itemSelecionado);

	$scope.comprar = function(){

		var pedido = {
			item : $scope.item.nome,
			valor : $scope.item.valor,
			nome : $scope.pessoa.nome,
			endereco : $scope.pessoa.endereco,
			email : $scope.pessoa.email
		}

		serviceItem.efetuarCompra(pedido).then(function(dados){
			console.log(dados);
			if (dados = 'recebido') {
				$ionicPopup.alert({
					title : 'Compra efetuada',
					template : 
						'<h2>' + $scope.pessoa.nome + '!</h2>' + 
						'<p>sua comprar foi realizada com sucesso.</p>' + 
						'<p>Será entregue no endereço: <b>' + $scope.pessoa.endereco + '</b>.</p>' + 
						'<p>Detalhes da compra foi enviado para o e-mail: <b>' + $scope.pessoa.email + '</b>.</p>',
					okType : 'button-assertive'
				}).then(function(){
					$state.go('listagem');
				});	
			}			
		});
	};
});