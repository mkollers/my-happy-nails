import { ServiceCategory } from '../models/service-category';
import { Photo } from '../models/photo';
import { Address } from '../models/address';

export interface StoreData {
    address: Address;
    phone: string;
    mail: string;
    location: google.maps.LatLng | google.maps.LatLngLiteral;
    photos: Photo[];
    services: ServiceCategory[];
};

export const INITIAL_STORE_DATA: StoreData = {
    address: {
        street: 'Falkensteiner Weg',
        houseNumber: '10',
        zip: '65843',
        city: 'Sulzbach (Taunus)'
    },
    phone: '+49 177 6342 915',
    mail: 'kontakt@my-happy-nails.de',
    location: {
        lat: 50.133442,
        lng: 8.5351918
    },
    photos: [],
    services: [{
        name: 'Kunstnägel',
        services: [{
            name: 'Naturnagelverstärkung',
            description: 'über die Fingerkuppe',
            cost: '40,00€'
        }, {
            name: 'Neumodellage',
            description: 'mit Tips oder Schablone',
            cost: 'ab 50,00€'
        }, {
            name: 'Auffüllen',
            description: 'bis 6 Wochen',
            cost: '40,00€'
        }, {
            name: 'Modellage entfernen',
            description: '',
            cost: '25,00€'
        }, {
            name: 'Reparatur',
            description: 'pro Nagel',
            cost: '8,00€'
        }]
    }, {
        name: 'Weitere Leistungen',
        services: [{
            name: 'Basic Maniküre',
            description: 'Nagelhaut entfernen, kürzen + formen, Nägel polieren',
            cost: '12,00€'
        }, {
            name: 'Klassische Maniküre',
            description: 'Basic + Pflegehandbad, Handpeeling + Handmassage',
            cost: '20,00€'
        }, {
            name: 'Handbad/Peeling',
            description: '+ Handmassage',
            cost: '15,00€'
        }]
    }, {
        name: 'Rabatte',
        services: [{
            name: 'Neukunde',
            description: 'auf alle Nagelmodellagen',
            cost: '50%'
        }, {
            name: 'Kunden anwerben',
            description: 'für den Werbenden',
            cost: '50%'
        }]
    }]
};
