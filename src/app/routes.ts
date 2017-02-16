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
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'preise', component: PricesComponent, pathMatch: 'full' },
    { path: 'bilder', component: ImagesComponent, pathMatch: 'full' },
    { path: 'kontakt', component: ContactComponent, pathMatch: 'full' },
    { path: 'anfahrt', component: LocationComponent, pathMatch: 'full' },
    { path: 'impressum', component: ImprintComponent, pathMatch: 'full' },
    defaultRoute
];
