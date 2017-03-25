import { PricesComponent } from './prices.component';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router/router';

export const Routes: Route[] = [{
    path: '', component: PricesComponent
}];

export const Routing = RouterModule.forChild(Routes);
