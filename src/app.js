(function () {
    'use strict';

    angular.module('brewr', []);

    angular
        .module('brewr')
        .controller('mainCtrl', ["$scope", function ($scope) {
            $scope.title = "message";
        }]);
}());