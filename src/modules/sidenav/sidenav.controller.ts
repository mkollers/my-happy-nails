export interface ISidenavController extends ng.IComponentController {
    items: ISidenavItem[];
}

export interface ISidenavItem {
    icon: string;
    name: string;
    title: string;
    view: string;
}

export class SidenavController implements ISidenavController {
    items: ISidenavItem[];

    constructor() {
    }
}