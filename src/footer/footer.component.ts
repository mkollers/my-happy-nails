/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    const component: ng.IComponentOptions = {
        templateUrl: '/my-happy-nails/footer/footer.html',
        controller: 'FooterController',
        controllerAs: 'footer',
        bindings: {
            items: '='
        }
    };

    angular
        .module('my-happy-nails.footer')
        .component('mhnFooter', component);
}