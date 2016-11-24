/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    angular
        .module('my-happy-nails')
        .config(config);

    function config($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '',
                template: '<mhn-home></mhn-home>'
            })
            .state('prices', {
                url: 'Preise',
                template: '<mhn-prices></mhn-prices>'
            })
            .state('images', {
                url: 'Bilder',
                template: '<mhn-images></mhn-images>'
            })
            .state('contact', {
                url: 'Kontakt',
                template: '<mhn-contact></mhn-contact>'
            })
            .state('location', {
                url: 'Anfahrt',
                template: '<mhn-location></mhn-location>'
            })
            .state('imprint', {
                url: 'Impressum',
                template: '<mhn-imprint></mhn-imprint>'
            });
    }
}