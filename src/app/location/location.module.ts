import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';

@NgModule({
    declarations: [
        LocationComponent
    ],
    imports: [
        CommonModule,
        LocationRoutingModule,

        // Material
        MatCardModule
    ]
})
export class LocationModule { }
