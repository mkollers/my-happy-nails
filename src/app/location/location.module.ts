import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { SharedModule } from '../shared/shared.module';
import { LocationComponent } from './location.component';
import { Routing } from './routes';

@NgModule({
    declarations: [
        LocationComponent
    ],
    imports: [
        CommonModule,
        Routing,
        FlexLayoutModule,
        MatCardModule,
        SharedModule
    ]
})
export class LocationModule { }
