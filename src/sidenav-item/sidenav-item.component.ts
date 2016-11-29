/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    const component: ng.IComponentOptions = {
        templateUrl: '/my-happy-nails/sidenav-item/sidenav-item.html',
        controller: 'SidenavItemController',
        controllerAs: 'item',
        bindings: {
            icon: '<',
            name: '<',
            title: '<',
            view: '<',
        }
    };

    angular
        .module('my-happy-nails.sidenav.item')
        .component('mhnSidenavItem', component);
}