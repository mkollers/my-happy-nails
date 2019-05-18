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
    title: string;
};

export const INITIAL_UI_STATE: UiState = {
    facebook: {
        accessToken: undefined
    },
    footerItems: FooterItems,
    location: {
        iFrameUrl: 'https://maps.google.de/maps/embed/v1/place?key=AIzaSyCNAFjhmK9AMKYH6ovmAtoE_8CjsnbLuqY&q=My+Happy+Nails'
    },
    title: 'Home',
};
