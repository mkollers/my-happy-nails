/// <reference path="../typings/index.d.ts"/>

module MyHappyNails {
    'use strict';

    angular.module('my-happy-nails', [
        // Angular modules
        'ngSanitize',

        // 3rd Party Modules
        'angulartics',
        'angulartics.google.analytics',
        'ngMaterial',
        'ui.router',

        // Custom modules
        'my-happy-nails.sidenav',
        'my-happy-nails.toolbar',
        'my-happy-nails.footer',
        'my-happy-nails.home',
        'my-happy-nails.location'
    ]);
}