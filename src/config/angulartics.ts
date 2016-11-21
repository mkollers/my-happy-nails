/// <reference path="../../typings/index.d.ts" />

namespace MyHappyNails {
    'use strict';

    angular
        .module('my-happy-nails')
        .config(config);

    function config($analyticsProvider: angulartics.IAnalyticsServiceProvider): void {
        // Records pages that don't use $state or $route
        $analyticsProvider.firstPageview(true);

        // Records full path
        $analyticsProvider.withAutoBase(true);
    }
}