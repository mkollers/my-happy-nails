import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LocationComponent } from './location.component';

export const routes: Route[] = [{
    path: '', component: LocationComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocationRoutingModule { }
