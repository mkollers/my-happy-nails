/// <reference path="../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface IMainController {
        header: string;
        sidenavItems: ISidenavItem[];
    }

    class MainController implements IMainController {
        header: string;
        sidenavItems: ISidenavItem[];

        constructor(private $rootScope: ng.IRootScopeService, private $state: ng.ui.IStateService) {
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

            this.watchState();
        }

        private watchState(): void {
            this.$rootScope.$on('$stateChangeSuccess', (event: ng.IAngularEvent, currentRoute: ng.ui.IState): void => {
                this.header = currentRoute.data.header;
                console.log(this.header);
            });
        }
    }

    angular
        .module('my-happy-nails')
        .controller('MainController', MainController);
}