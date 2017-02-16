import { NavigationItem } from '../models/navigation-item';
import { SidenavItems } from './sidenav-items';

export const FooterItems: NavigationItem[] = [
    ...SidenavItems, {
        text: 'Impressum',
        url: ['/impressum'],
        icon: undefined,
        title: 'Gesetzlich vorgeschriebene Herkunftsangabe'
    }
];
