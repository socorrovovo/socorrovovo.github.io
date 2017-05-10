(function(){
    'use strict';

    angular
        .module('socorroVovo')
        .factory('membersFactory', membersFactory)

    membersFactory.$inject = ['DB_CONFIG', '$http', '$q'];

    function membersFactory(DB_CONFIG, $http, $q) {
        var self = this;
        var deferred = $q.defer();
        var service = {
            getData: getData
        };

        return service;

        function getData() {
          $http.get(DB_CONFIG.members)
            .then(
              function (res) {
                console.log('member.factory getData res.data');
                console.log(res.data);
                // return res.data;
                deferred.resolve(res.data);
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
