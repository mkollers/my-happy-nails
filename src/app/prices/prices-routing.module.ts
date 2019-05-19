import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PricesComponent } from './prices.component';

export const routes: Route[] = [{
    path: '', component: PricesComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PricesRoutingModule { }
