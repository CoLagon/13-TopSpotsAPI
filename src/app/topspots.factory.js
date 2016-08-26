(function() {
    'use strict';

    angular
        .module('app')
        .factory('topSpotsFactory', topSpotsFactory);

    topSpotsFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function topSpotsFactory($http, $q) {
        var service = {
            topSpotsResults: topSpotsResults
        };
        return service;

        ////////////////

        function topSpotsResults() {
            var deferred = $q.defer();

            $http.get('http://localhost:52191/api/TopSpots')
                .then(function(response) {
                        deferred.resolve(response.data);
                        console.log("topspots works");
                    },
                    function(err) {
                        console.log(err);
                    });
            return deferred.promise;

        }
    }
})();
