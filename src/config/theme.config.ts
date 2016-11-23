/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    angular
        .module('my-happy-nails')
        .config(config);

    function config($mdThemingProvider: ng.material.IThemingProvider): void {
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
    }
}