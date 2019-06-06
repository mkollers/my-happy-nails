import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreloadOnDesktopStrategy } from './shared/preload-on-desktop-strategy';

const routes: Routes = [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), pathMatch: 'full', data: { state: 'home' } },
    { path: 'preise', loadChildren: () => import('./prices/prices.module').then(m => m.PricesModule), data: { state: 'prices' } },
    { path: 'bilder', loadChildren: () => import('./images/images.module').then(m => m.ImagesModule), data: { state: 'images' } },
    { path: 'kontakt', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule), data: { state: 'contact' } },
    { path: 'anfahrt', loadChildren: () => import('./location/location.module').then(m => m.LocationModule), data: { state: 'location' } },
    { path: 'impressum', loadChildren: () => import('./imprint/imprint.module').then(m => m.ImprintModule), data: { state: 'imprint' } },
    { path: 'privacy', loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyModule), data: { state: 'privacy' } },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadOnDesktopStrategy })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
