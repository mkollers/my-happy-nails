import { NavigationItem } from '../models/navigation-item';
export interface UiState {
    title: string;
    sidenavItems: NavigationItem[];
    footerItems: NavigationItem[];
};

const sidenavItems = [{
    text: 'Home',
    url: '/',
    icon: 'home',
    title: 'Aktuelle Informationen über mein Nagelstudio in Sulzbach'
}, {
    text: 'Preise',
    url: '/preise',
    icon: 'euro_symbol',
    title: 'Übersicht aller aktuellen Leistungen, Preise und Rabatte'
}, {
    text: 'Bilder',
    url: '/bilder',
    icon: 'image',
    title: 'Bilder und Impressionen meiner Arbeiten'
}, {
    text: 'Kontakt',
    url: '/kontakt',
    icon: 'phone',
    title: 'Wie könnt Ihr mich erreichen?'
}, {
    text: 'Anfahrt',
    url: '/anfahrt',
    icon: 'location_on',
    title: 'Übersicht aller aktuellen Leistungen, Preise und Rabatte'
}];
export const INITIAL_UI_STATE: UiState = {
    title: 'Home',
    sidenavItems: sidenavItems,
    footerItems: [
        ...sidenavItems, {
            text: 'Impressum',
            url: '/impressum',
            icon: undefined,
            title: 'Gesetzlich vorgeschriebene Herkunftsangabe'
        }
    ]
};
