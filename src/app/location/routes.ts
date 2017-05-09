import { LocationComponent } from './location.component';
import { Route, RouterModule } from '@angular/router';

export const Routes: Route[] = [{
    path: '', component: LocationComponent
}];

export const Routing = RouterModule.forChild(Routes);
