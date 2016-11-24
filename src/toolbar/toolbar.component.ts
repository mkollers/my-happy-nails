/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    const component: ng.IComponentOptions = {
        templateUrl: '/my-happy-nails/toolbar/toolbar.html',
        controller: 'ToolbarController',
        controllerAs: 'toolbar',
        bindings: {
            header: '@'
        }
    };

    angular
        .module('my-happy-nails.toolbar')
        .component('mhnToolbar', component);
}