(function () {
    'use strict';

    angular
        .module('brewr')
        .controller('homeCtrl', ["$scope", function ($scope) {
            $scope.title = "Title";
        }])
}());