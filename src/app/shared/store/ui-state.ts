import { FooterItems } from '../data/footer-items';
import { SidenavItems } from '../data/sidenav-items';
import { NavigationItem } from '../models/navigation-item';

export interface UiState {
    facebook: {
        accessToken: string;
    };
    footerItems: NavigationItem[];
    location: {
        iFrameUrl: string;
    };
    sidenavItems: NavigationItem[];
    title: string;
};

export const INITIAL_UI_STATE: UiState = {
    facebook: {
        accessToken: undefined
    },
    footerItems: FooterItems,
    location: {
        iFrameUrl: 'https://maps.google.de/maps?hl=de&q=Falkensteiner%20Weg%2010&t=&z=16&ie=UTF8&iwloc=B&output=embed'
    },
    title: 'Home',
    sidenavItems: SidenavItems
};
