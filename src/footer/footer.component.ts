/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    const component: ng.IComponentOptions = {
        templateUrl: '/my-happy-nails/footer/footer.html',
        controller: 'FooterController',
        controllerAs: 'footer',
        bindings: {
            links: '<'
        }
    };

    angular
        .module('my-happy-nails.footer')
        .component('mhnFooter', component);
}