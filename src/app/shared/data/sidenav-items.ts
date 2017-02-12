import { NavigationItem } from '../models/navigation-item';

export const SidenavItems: NavigationItem[] = [{
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
