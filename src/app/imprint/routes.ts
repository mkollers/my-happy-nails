import { ImprintComponent } from './imprint.component';
import { Route, RouterModule } from '@angular/router';

export const Routes: Route[] = [{
    path: '', component: ImprintComponent
}];

export const Routing = RouterModule.forChild(Routes);
