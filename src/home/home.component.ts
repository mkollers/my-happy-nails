/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    const component: ng.IComponentOptions = {
        templateUrl: '/my-happy-nails/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
        bindings: {
        }
    };

    angular
        .module('my-happy-nails.home')
        .component('mhnHome', component);
}