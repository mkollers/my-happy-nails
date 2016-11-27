/// <reference path="../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface IMainController {
        footerLinks: IFooterLink[];
        header: string;
        sidenavItems: ISidenavItem[];
    }

    class MainController implements IMainController {
        footerLinks: IFooterLink[];
        header: string;
        sidenavItems: ISidenavItem[];

        constructor(private $rootScope: ng.IRootScopeService, private $state: ng.ui.IStateService) {
            this.sidenavItems = [{
                'name': 'Home',
                'title': 'Aktuelle Informationen über mein Nagelstudio in Eschborn',
                'view': 'base.home',
                'icon': 'home'
            }, {
                'name': 'Preise',
                'title': 'Übersicht aller aktuellen Leistungen, Preise und Rabatte',
                'view': 'base.prices',
                'icon': 'euro'
            }, {
                'name': 'Bilder',
                'title': 'Bilder und Impressionen meiner Arbeiten',
                'view': 'base.images',
                'icon': 'images'
            }, {
                'name': 'Kontakt',
                'title': 'Wie könnt Ihr mich erreichen?',
                'view': 'base.contact',
                'icon': 'phone'
            }, {
                'name': 'Anfahrt',
                'title': 'Wo findet Ihr mich? Wo könnt ihr Parken?',
                'view': 'base.location',
                'icon': 'location'
            }];

            this.footerLinks = this.sidenavItems.slice(0); // create a copy
            this.footerLinks.push({
                name: 'Impressum',
                title: 'Gesetzlich vorgeschriebene Herkunftsangabe',
                view: 'base.imprint'
            });

            this.watchState();
        }

        private watchState(): void {
            this.$rootScope.$on('$stateChangeSuccess', (event: ng.IAngularEvent, currentRoute: ng.ui.IState): void => {
                this.header = currentRoute.data.header;
            });
        }
    }

    angular
        .module('my-happy-nails')
        .controller('MainController', MainController);
}