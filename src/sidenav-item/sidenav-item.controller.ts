/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface ISidenavItemController extends ISidenavItem, ng.IComponentController {
        closeSidenav(): void;
    }

    class SidenavItemController implements ISidenavItemController {
        icon: string;
        name: string;
        title: string;
        view: string;

        constructor(private $mdSidenav: ng.material.ISidenavService) {
        }

        closeSidenav(): void {
            this.$mdSidenav('left').close();
        }
    }

    angular
        .module('my-happy-nails.sidenav.item')
        .controller('SidenavItemController', SidenavItemController);
}