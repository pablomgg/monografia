(function () {
    'use strict'
    angular
        .module('app.pessoa')
        .service('PessoaService', PessoaService);

    PessoaService.$inject = ['$http'];

    function PessoaService($http) {
        var vm = this;
        vm.obterPessoas = obterPessoas;
        vm.obterPessoa = obterPessoa;
	vm.cadastrarPessoa = cadastrarPessoa;
        vm.editarPessoa = editarPessoa;
	vm.excluirPessoa= excluirPessoa;

        function obterPessoas() {
            return $http.get('/backend/pessoa/pessoa.php');
        }

        function obterPessoa(id) {
            return $http.get('/backend/pessoa/pessoa.php?id=' + id);
        }

        function editarPessoa(idpessoa, pessoa) {
            var url = getStringUrl(pessoa);

            return $http.post(`/backend/pessoa/updatePessoa.php?id=`+ idpessoa + '&' + url, '');
        }

        function cadastrarPessoa(pessoa) {
            var url = getStringUrl(pessoa);

            return $http.post(`/backend/pessoa/setPessoa.php?` + url, '');
        }

        function excluirPessoa(id) {
            return $http.post(`/backend/pessoa/excluirPessoa.php?id=` + id, '');
        }

        function getStringUrl(obj) {
            var str = Object.keys(obj).map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
            }).join('&');
            return str;
        }
    }
})();