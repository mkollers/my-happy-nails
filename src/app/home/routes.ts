import { HomeComponent } from './home.component';
import { ModuleWithProviders } from '@angular/core/core';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router/router';

export const Routes: Route[] = [{
    path: '', component: HomeComponent
}];

export const Routing = RouterModule.forChild(Routes);
