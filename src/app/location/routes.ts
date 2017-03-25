import { LocationComponent } from './location.component';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router/router';

export const Routes: Route[] = [{
    path: '', component: LocationComponent
}];

export const Routing = RouterModule.forChild(Routes);
