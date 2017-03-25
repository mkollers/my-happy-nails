import { ContactComponent } from './contact.component';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router/router';

export const Routes: Route[] = [{
    path: '', component: ContactComponent
}];

export const Routing = RouterModule.forChild(Routes);
