import { NavigationItem } from '../models/navigation-item';

export const SidenavItems: NavigationItem[] = [{
    text: 'Home',
    url: ['/'],
    icon: 'material:home',
    title: 'Aktuelle Informationen über mein Nagelstudio in Sulzbach'
}, {
    text: 'Preise',
    url: ['/preise'],
    icon: 'material:euro_symbol',
    title: 'Übersicht aller aktuellen Leistungen, Preise und Rabatte'
}, {
    text: 'Bilder',
    url: ['/bilder'],
    icon: 'material:image',
    title: 'Bilder und Impressionen meiner Arbeiten'
}, {
    text: 'Kontakt',
    url: ['/kontakt'],
    icon: 'material:phone',
    title: 'Wie könnt Ihr mich erreichen?'
}, {
    text: 'Anfahrt',
    url: ['/anfahrt'],
    icon: 'material:location_on',
    title: 'Übersicht aller aktuellen Leistungen, Preise und Rabatte'
}];
