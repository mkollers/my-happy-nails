/// <reference path="../../typings/index.d.ts" />

namespace MyHappyNails.Sidenav {
    'use strict';

    export interface ISidenavController {
        items: ISidenavItem[];
    }

    export interface ISidenavItem {
        icon: string;
        name: string;
        title: string;
        view: string;
    }

    class SidenavController implements ISidenavController {
        items: ISidenavItem[];

        constructor() {
        }
    }

    angular
        .module('my-happy-nails.sidenav')
        .controller('SidenavController', SidenavController);
}