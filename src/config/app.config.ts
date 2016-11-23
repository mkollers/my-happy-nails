/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    angular
        .module('my-happy-nails')
        .config(config);

    function config($locationProvider: ng.ILocationProvider): void {
        $locationProvider.html5Mode(true);
    }
}