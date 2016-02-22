(function () {
    'use strict';

    angular
        .module('brewr')
        .controller('homeCtrl', ["$scope", "BrewDataService", function ($scope, BrewDataService) {
            $scope.title = "Title";

            var brews = BrewDataService;

            brews.query(function (results) {
                $scope.brews = results;
            });
        }]);
}());