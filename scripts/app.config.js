angular
  .module('socorroVovo')
  .constant('DB_CONFIG', {
    url: './data/data.json'
  })
  .config([
    '$interpolateProvider', function($interpolateProvider) {
      return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
  ]);
