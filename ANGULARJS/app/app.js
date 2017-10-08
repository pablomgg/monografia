(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular
    .module('app', [
      'ngRoute',
      'app.pessoa',
      'app.version'
    ])
    .config(Config);

  Config.$inject = ['$locationProvider', '$routeProvider'];

  function Config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.otherwise({ redirectTo: '/pessoa' });
  }

})();

