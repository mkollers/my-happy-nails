import { PricesComponent } from './prices.component';
import { Route, RouterModule } from '@angular/router';

export const Routes: Route[] = [{
    path: '', component: PricesComponent
}];

export const Routing = RouterModule.forChild(Routes);
