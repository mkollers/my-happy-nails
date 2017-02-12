import { FooterItems } from '../data/footer-items';
import { SidenavItems } from '../data/sidenav-items';
import { NavigationItem } from '../models/navigation-item';

export interface UiState {
    title: string;
    sidenavItems: NavigationItem[];
    footerItems: NavigationItem[];
};

export const INITIAL_UI_STATE: UiState = {
    title: 'Home',
    sidenavItems: SidenavItems,
    footerItems: FooterItems
};
