import { ImprintComponent } from './imprint/imprint.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { ImagesComponent } from './images/images.component';
import { PricesComponent } from './prices/prices.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const defaultRoute = {
    path: '**',
    redirectTo: ''
};

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Preise', component: PricesComponent },
    { path: 'Bilder', component: ImagesComponent },
    { path: 'Kontakt', component: ContactComponent },
    { path: 'Anfahrt', component: LocationComponent },
    { path: 'Impressum', component: ImprintComponent },
    defaultRoute
];
