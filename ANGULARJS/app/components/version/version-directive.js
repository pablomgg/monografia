(function () {
  'use strict';

  angular
    .module('app.version.version-directive', [])
    .directive('appVersion', ['version', VersionDirective]);

  function VersionDirective(version) {
    return function (scope, elm, attrs) {
      elm.text(version);
    };
  }
})();