angular
  .module('socorroVovo')
  .constant('DB_CONFIG', {
    tools: './data/tools.json',
    members: 'https://api.github.com/orgs/socorrovovo/members',
    nMembers: './data/members.json'
  })
  .config([
    '$interpolateProvider', function($interpolateProvider) {
      return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
  ]);
