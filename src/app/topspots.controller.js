
(function() {
    'use strict';

    angular
        .module('app')
        .controller('topSpotsCtrl', topSpotsCtrl);

    topSpotsCtrl.$inject = ['topSpotsFactory'];

    /* @ngInject */
    function topSpotsCtrl(topSpotsFactory) {
        var vm = this;
        vm.title = 'topSpotsCtrl';
        vm.spots = null;
        activate();

        ////////////////

        function activate() {
            topSpotsFactory.topSpotsResults().then(
                function(data){
                    vm.spots = data;
                    console.log(data);
                },
                function(error) {

                }
            );
        }
    }
})();