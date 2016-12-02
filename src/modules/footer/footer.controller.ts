export interface IFooterController extends ng.IComponentController {
    links: IFooterLink[];
}

export interface IFooterLink {
    name: string;
    title: string;
    view: string;
}

export class FooterController implements IFooterController {
    links: IFooterLink[];
}