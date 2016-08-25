'use strict';

var hideherderApp = angular.module('hideherder',
    ['ui.router', 'ui.bootstrap', 'treeherder', 'angular-clipboard']);

hideherderApp.config(function($compileProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
    // Disable debug data, as recommended by https://docs.angularjs.org/guide/production
    $compileProvider.debugInfoEnabled(false);

    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.useApplyAsync(true);

    $stateProvider.state('profiles', {
        title: 'Profiles',
        templateUrl: 'hideherder/profiles.html',
        url: '/profiles',
        controller: 'HideEditorCtrl'
    }).state('exclusions', {
        title: 'Exclusions',
        templateUrl: 'hideherder/exclusions.html',
        url: '/exclusions',
        controller: 'HideEditorCtrl'
    });

    $urlRouterProvider.otherwise('/profiles');
}).run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $rootScope.$on('$stateChangeSuccess', function() {
                if ($state.current.title) {
                    window.document.title = $state.current.title;
                }
            });
        }]);
