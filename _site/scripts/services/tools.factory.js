(function(){
    'use strict';

    angular
        .module('socorroVovo')
        .factory('toolsFactory', toolsFactory)

    toolsFactory.$inject = ['DB_CONFIG', '$http', '$q'];

    function toolsFactory(DB_CONFIG, $http, $q) {
        var self = this;
        var deferred = $q.defer();
        var service = {
            getData: getData
        };

        return service;

        function getData() {
          $http.get(DB_CONFIG.url)
            .then(
              function (res) {
                // console.log(res.data.tools);
                // return res.data.tools;
                deferred.resolve(res.data.tools);
              },
              function (err) {
                return err;
              }
            );
          // console.log(deferred.promise);
          return deferred.promise;
        }
    }
})();