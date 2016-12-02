/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    const component: ng.IComponentOptions = {
        templateUrl: '/my-happy-nails/location/location.html',
        controller: 'LocationController',
        controllerAs: 'location',
        bindings: {
        }
    };

    angular
        .module('my-happy-nails.location')
        .component('mhnLocation', component);
}