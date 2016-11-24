/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface IToolbarController {
        header: string;
        toggleSidenav(): void;
    }

    class ToolbarController implements IToolbarController {
        header: string;

        constructor(private $mdSidenav: ng.material.ISidenavService) {
        }

        toggleSidenav(): void {
            this.$mdSidenav('left').toggle();
        }
    }

    angular
        .module('my-happy-nails.toolbar')
        .controller('ToolbarController', ToolbarController);
}