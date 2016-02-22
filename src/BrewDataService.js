(function () {
    'use strict';

    angular
        .module('common.services')
        .factory('BrewDataService', ["$resource", "appSettings", function ($resource, appSettings) {
            return $resource(appSettings.serverPath + 'api/brews');
        }]);
}());