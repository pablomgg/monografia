(function () {
    'use strict';

    angular
        .module('app.pessoa')
        .controller('PessoaCadastroController', PessoaCadastroController);


    PessoaCadastroController.$inject = ['PessoaService', '$location', '$routeParams'];


    function PessoaCadastroController(PessoaService, $location, $routeParams) {
        var vm = this;

        vm.id = 0;
        vm.cadastro = {
            nome: '',
            sobre_nome: '',
            endereco: '',
            telefone: ''
        };

        vm.salvarPessoa = salvarPessoa;
        vm.cancelar = cancelar;

        function salvarPessoa() {
            if (vm.id > 0) {
                PessoaService.editarPessoa(vm.id, vm.cadastro)
                    .success(function (response) {
                        console.log(vm.cadastro);
                        $location.path('pessoa');
                    });

            } else {
                PessoaService.cadastrarPessoa(vm.cadastro)
                    .success(function (response) {
                        console.log(vm.cadastro);
                        $location.path('pessoa');
                    });
            }
        }

        function cancelar() {
            $location.path('pessoa');
        }

        function onInit() {
            vm.id = +$routeParams.id;
            if (vm.id > 0) {
                obterPessoa();
            }
        }

        function obterPessoa() {
            PessoaService.obterPessoa(vm.id)
                .success(function (response) {
                    if (response) {
                        vm.cadastro = response[0];
                    }
                });
        }

        onInit();
    }

})();

