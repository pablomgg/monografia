(function () {
  'use strict';
  angular
    .module('app.version.interpolate-filter', [])
    .filter('interpolate', ['version', VersionFilter]);
    
    function VersionFilter(version) {
      return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
      };
    }
})();