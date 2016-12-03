/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    angular
        .module('my-happy-nails')
        .config(config);

    function config($mdThemingProvider: ng.material.IThemingProvider, $mdIconProvider: ng.material.IIconProvider): void {
        $mdThemingProvider.definePalette('my-happy-nails', {
            '50': '#ffffff',
            '100': '#ead1ee',
            '200': '#d7a8df',
            '300': '#bf74cc',
            '400': '#b55dc4',
            '500': '#ab47bc',
            '600': '#983da7',
            '700': '#843591',
            '800': '#6f2d7b',
            '900': '#5b2464',
            'A100': '#ffffff',
            'A200': '#ead1ee',
            'A400': '#b55dc4',
            'A700': '#843591',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('my-happy-nails')
            .accentPalette('grey');

        $mdIconProvider.icon('menu', './assets/menu.svg', 24);
        $mdIconProvider.icon('home', './assets/home.svg', 16);
        $mdIconProvider.icon('images', './assets/images.svg', 16);
        $mdIconProvider.icon('location', './assets/location.svg', 16);
        $mdIconProvider.icon('euro', './assets/euro.svg', 16);
        $mdIconProvider.icon('phone', './assets/phone.svg', 16);
        $mdIconProvider.icon('mail', './assets/mail.svg', 16);
        $mdIconProvider.icon('facebook', './assets/facebook.svg', 24);
        $mdIconProvider.icon('google-plus', './assets/google-plus.svg', 24);
        $mdIconProvider.icon('github', './assets/github.svg', 24);
    }
}