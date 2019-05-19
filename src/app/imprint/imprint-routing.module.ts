import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ImprintComponent } from './imprint.component';

export const routes: Route[] = [{
    path: '', component: ImprintComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImprintRoutingModule { }
