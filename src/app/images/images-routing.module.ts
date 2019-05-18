import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ImagesComponent } from './images.component';

export const routes: Route[] = [{
    path: '', component: ImagesComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImagesRoutingModule { }
