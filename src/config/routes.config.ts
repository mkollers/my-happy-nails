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
                template: '<mhn-home></mhn-home>',
                data: {
                    header: 'Home'
                }
            })
            .state('prices', {
                url: 'Preise',
                template: '<mhn-prices></mhn-prices>',
                data: {
                    header: 'Preise'
                }
            })
            .state('images', {
                url: 'Bilder',
                template: '<mhn-images></mhn-images>',
                data: {
                    header: 'Bilder'
                }
            })
            .state('contact', {
                url: 'Kontakt',
                template: '<mhn-contact></mhn-contact>',
                data: {
                    header: 'Kontakt'
                }
            })
            .state('location', {
                url: 'Anfahrt',
                template: '<mhn-location></mhn-location>',
                data: {
                    header: 'Anfahrt'
                }
            })
            .state('imprint', {
                url: 'Impressum',
                template: '<mhn-imprint></mhn-imprint>',
                data: {
                    header: 'Impressum'
                }
            });
    }
}