(function(){
    'use strict';

    angular
        .module('socorroVovo')
        .controller('MembersController', MembersController)

    ToolsController.$inject = ['membersFactory', '$scope'];

    function MembersController(membersFactory, $scope) {
        /* jshint validthis:true */
        var vm = this;
        $scope.txtSearch = '';

        activate();

        function activate() {

          membersFactory.getData().then(
            function (data) {
              $scope.tools = data;
            }
          );
        }
    }
})();
