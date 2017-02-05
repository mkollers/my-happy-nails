import { Address } from '../models/address';

export interface StoreData {
    address: Address;
    phone: string;
    mail: string;
    location: google.maps.LatLng | google.maps.LatLngLiteral;
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
    }
};
