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
                'icon': 'home'
            }, {
                'name': 'Preise',
                'title': 'Übersicht aller aktuellen Leistungen, Preise und Rabatte',
                'view': 'prices',
                'icon': 'euro'
            }, {
                'name': 'Bilder',
                'title': 'Bilder und Impressionen meiner Arbeiten',
                'view': 'images',
                'icon': 'images'
            }, {
                'name': 'Kontakt',
                'title': 'Wie könnt Ihr mich erreichen?',
                'view': 'contact',
                'icon': 'phone'
            }, {
                'name': 'Anfahrt',
                'title': 'Wo findet Ihr mich? Wo könnt ihr Parken?',
                'view': 'location',
                'icon': 'location'
            }];
        }
    }

    angular
        .module('my-happy-nails')
        .controller('MainController', MainController);
}