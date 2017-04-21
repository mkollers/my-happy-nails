import { HomeComponent } from './home.component';
import { Route, RouterModule } from '@angular/router';

export const Routes: Route[] = [{
    path: '', component: HomeComponent
}];

export const Routing = RouterModule.forChild(Routes);
