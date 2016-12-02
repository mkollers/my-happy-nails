import { ISidenavItem } from '../sidenav.controller';

export interface ISidenavItemController extends ISidenavItem, ng.IComponentController {
    closeSidenav(): void;
}

export class SidenavItemController implements ISidenavItemController {
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