/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    class SidenavItemController implements ISidenavItem {
        icon: string;
        name: string;
        title: string;
        view: string;

        constructor() {
        }
    }

    angular
        .module('my-happy-nails.sidenav.item')
        .controller('SidenavItemController', SidenavItemController);
}