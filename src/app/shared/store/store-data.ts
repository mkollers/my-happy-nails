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
    services: [ {
        name: 'Weitere Leistungen',
        services: [{
            name: 'Basic Maniküre',
            description: 'Nagelhaut entfernen, kürzen + formen, polieren',
            cost: '12,00€'
        }, {
            name: 'Klassische Maniküre',
            description: 'Basic + Handbad, Peeling + Massage',
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
            cost: '30%'
        }, {
            name: 'Kunden anwerben',
            description: 'für den Werbenden',
            cost: '30%'
        }]
    }]
};
