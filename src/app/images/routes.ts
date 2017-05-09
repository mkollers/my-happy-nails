import { ImagesComponent } from './images.component';
import { Route, RouterModule } from '@angular/router';

export const Routes: Route[] = [{
    path: '', component: ImagesComponent
}];

export const Routing = RouterModule.forChild(Routes);
