import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

export const routes: Route[] = [{
    path: '', component: ContactComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
