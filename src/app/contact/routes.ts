import { ContactComponent } from './contact.component';
import { Route, RouterModule } from '@angular/router';

export const Routes: Route[] = [{
    path: '', component: ContactComponent
}];

export const Routing = RouterModule.forChild(Routes);
