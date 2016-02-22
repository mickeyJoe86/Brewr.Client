(function () {
    'use strict';

    var app = angular.module('brewr', ['ui.router', 'ngResource', 'common.services']);

    app.config(["$stateProvider",
            "$urlRouterProvider",
            "$locationProvider",
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "Home/home.html",
                    controller: 'homeCtrl'
                });
        }
    ]);
}());