/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    const component: ng.IComponentOptions = {
        templateUrl: '/my-happy-nails/sidenav/sidenav.html',
        controller: 'SidenavController',
        controllerAs: 'sidenav',
        bindings: {
            items: '='
        }
    };

    angular
        .module('my-happy-nails.sidenav')
        .component('mhnSidenav', component);
}