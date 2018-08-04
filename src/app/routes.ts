import { Routes } from '@angular/router';

const defaultRoute = {
    path: '**',
    redirectTo: ''
};

export const AppRoutes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full', data: { state: 'home' } },
    { path: 'preise', loadChildren: './prices/prices.module#PricesModule', data: { state: 'prices' } },
    { path: 'bilder', loadChildren: './images/images.module#ImagesModule', data: { state: 'images' } },
    { path: 'kontakt', loadChildren: './contact/contact.module#ContactModule', data: { state: 'contact' } },
    { path: 'anfahrt', loadChildren: './location/location.module#LocationModule', data: { state: 'location' } },
    { path: 'impressum', loadChildren: './imprint/imprint.module#ImprintModule', data: { state: 'imprint' } },
    { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyModule', data: { state: 'privacy' } },
    defaultRoute
];
