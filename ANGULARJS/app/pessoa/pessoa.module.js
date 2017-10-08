(function () {
    'use strict';

    angular
        .module('app.pessoa', ['ngRoute'])
        .config(Config);

        Config.$inject = ['$routeProvider'];

        function Config($routeProvider) {
            $routeProvider
            .when('/pessoa', {
                templateUrl: 'pessoa/consulta/pessoa-consulta.html',
                controller: 'PessoaConsultaController',
                controllerAs: 'pessoaC'
            })
            .when('/pessoa/cadastro', {
                templateUrl: 'pessoa/cadastro/pessoa-cadastro.html',
                controller: 'PessoaCadastroController',
                controllerAs: 'pessoa'
            })
            .when('/pessoa/editar/:id', {
                templateUrl: 'pessoa/cadastro/pessoa-cadastro.html',
                controller: 'PessoaCadastroController',
                controllerAs: 'pessoa'
            });
        }
})();