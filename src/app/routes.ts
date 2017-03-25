import { Routes } from '@angular/router';

const defaultRoute = {
    path: '**',
    redirectTo: ''
};

export const AppRoutes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full' },
    { path: 'preise', loadChildren: './prices/prices.module#PricesModule' },
    { path: 'bilder', loadChildren: './images/images.module#ImagesModule' },
    { path: 'kontakt', loadChildren: './contact/contact.module#ContactModule' },
    { path: 'anfahrt', loadChildren: './location/location.module#LocationModule' },
    { path: 'impressum', loadChildren: './imprint/imprint.module#ImprintModule' },
    defaultRoute
];
