/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface IFooterController {
    }

    class FooterController implements IFooterController {
        constructor() {
        }
    }

    angular
        .module('my-happy-nails.footer')
        .controller('FooterController', FooterController);
}