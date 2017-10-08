(function () {
    'use strict';

    angular
        .module('app.pessoa')
        .controller('PessoaConsultaController', PessoaConsultaController);


    PessoaConsultaController.$inject = ['PessoaService', '$location'];


    function PessoaConsultaController(PessoaService,  $location) {
        var vm = this;
        vm.pessoas = [];
        vm.obterPessoas = obterPessoas;
        vm.editar = editar;
        vm.excluir = excluir;

        function editar(id) {
            $location.path('pessoa/editar/' +  id);
        }

        function obterPessoas() {
            PessoaService.obterPessoas()
                .success(function (response) {
                    vm.pessoas = response;
                    console.log(vm.pessoas);
                });
        }

        function excluir(id) {
            PessoaService.excluirPessoa(id)
                .success(function (response) {
                     vm.obterPessoas();
                });
        }

        vm.obterPessoas();

    }

})();

