/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface IHomeController {
    }

    class HomeController implements IHomeController {
        constructor() {
        }
    }

    angular
        .module('my-happy-nails.home')
        .controller('HomeController', HomeController);
}