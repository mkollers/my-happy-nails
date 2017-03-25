import { ImagesComponent } from './images.component';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router/router';

export const Routes: Route[] = [{
    path: '', component: ImagesComponent
}];

export const Routing = RouterModule.forChild(Routes);
