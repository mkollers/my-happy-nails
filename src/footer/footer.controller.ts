/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface IFooterController extends ng.IComponentController {
        links: IFooterLink[];
    }

    export interface IFooterLink {
        name: string;
        title: string;
        view: string;
    }

    class FooterController implements IFooterController {
        links: IFooterLink[];

        constructor() {
        }
    }

    angular
        .module('my-happy-nails.footer')
        .controller('FooterController', FooterController);
}