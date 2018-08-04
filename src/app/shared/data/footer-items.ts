import { NavigationItem } from '../models/navigation-item';
import { SidenavItems } from './sidenav-items';

export const FooterItems: NavigationItem[] = [
    ...SidenavItems, {
        text: 'Impressum',
        url: ['/impressum'],
        title: 'Gesetzlich vorgeschriebene Herkunftsangabe'
    }, {
        text: 'Datenschutzerklärung',
        url: ['/privacy'],
        title: 'Datenschutzerklärung nach DSGVO'
    }
];
