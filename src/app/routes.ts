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
    { path: 'preise', component: PricesComponent },
    { path: 'bilder', component: ImagesComponent },
    { path: 'kontakt', component: ContactComponent },
    { path: 'anfahrt', component: LocationComponent },
    { path: 'impressum', component: ImprintComponent },
    defaultRoute
];
