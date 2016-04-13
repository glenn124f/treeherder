'use strict';

var exclusionEditorApp = angular.module('exclusioneditor', ['treeherder']);

exclusionEditorApp.config(function($compileProvider) {
    // Disable debug data, as recommended by https://docs.angularjs.org/guide/production
    $compileProvider.debugInfoEnabled(false);
});
