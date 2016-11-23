/// <reference path="../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface IMainController {
        sidenavItems: ISidenavItem[];
    }

    class MainController implements IMainController {
        sidenavItems: ISidenavItem[];

        constructor() {
            this.sidenavItems = [{
                'name': 'Home',
                'title': 'Aktuelle Informationen über mein Nagelstudio in Eschborn',
                'view': 'home',
                'icon': '&#xE88A;'
            }, {
                'name': 'Preise',
                'title': 'Übersicht aller aktuellen Leistungen, Preise und Rabatte',
                'view': 'index.prices',
                'icon': '&#xE227;'
            }, {
                'name': 'Bilder',
                'title': 'Bilder und Impressionen meiner Arbeiten',
                'view': 'index.images',
                'icon': '&#xE3B6;'
            }, {
                'name': 'Kontakt',
                'title': 'Wo findet Ihr mich? Wie könnt Ihr mich erreichen?',
                'view': 'index.contact',
                'icon': '&#xE55F;'
            }];
        }
    }

    angular
        .module('my-happy-nails')
        .controller('MainController', MainController);
}