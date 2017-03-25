import { ImprintComponent } from './imprint.component';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router/router';

export const Routes: Route[] = [{
    path: '', component: ImprintComponent
}];

export const Routing = RouterModule.forChild(Routes);
