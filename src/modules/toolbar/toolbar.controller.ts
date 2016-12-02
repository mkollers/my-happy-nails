export interface IToolbarController extends ng.IComponentController {
    header: string;
    toggleSidenav(): void;
}

export class ToolbarController implements IToolbarController {
    header: string;

    constructor(private $mdSidenav: ng.material.ISidenavService) {
    }

    toggleSidenav(): void {
        this.$mdSidenav('left').toggle();
    }
}