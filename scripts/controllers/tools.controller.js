(function(){
    'use strict';

    angular
        .module('socorroVovo')
        .controller('ToolsController', ToolsController)

    ToolsController.$inject = ['toolsFactory', '$scope'];

    function ToolsController(toolsFactory, $scope) {
        /* jshint validthis:true */
        var vm = this;
        $scope.txtSearch = '';
        $scope.selectedWords = [];

        

        activate();

        function activate() {

          toolsFactory.getData().then(
            function (data) {
              $scope.tools = data;
            }
          );

          $scope.findTo = function () {
            console.log(this.tag);
            // $scope.txtSearch +=  (($scope.txtSearch !== '') ? ' ' + this.tag : this.tag );
            $scope.txtSearch =  this.tag;
          }
        }
    }
})();