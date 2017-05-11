angular
  .module('socorroVovo')
  .constant('DB_CONFIG', {
    tools: '/data/tools.json',
    members: 'https://api.github.com/repos/socorrovovo/socorrovovo.github.io/contributors',
    nMembers: '/data/members.json'
  })
  .config([
    '$interpolateProvider', function($interpolateProvider) {
      return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
  ]);
