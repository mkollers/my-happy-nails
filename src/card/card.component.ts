/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    const component: ng.IComponentOptions = {
        templateUrl: '/my-happy-nails/card/card.html',
        controller: 'CardController',
        controllerAs: 'card',
        bindings: {
            header: '@',
            mapConfig: '<',
            mapMarker: '<',
            iFrameUrl: '@'
        },
        transclude: true
    };

    angular
        .module('my-happy-nails.card')
        .component('mhnCard', component);
}