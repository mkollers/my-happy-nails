import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule } from '@angular/material';

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
        MdCardModule,
        SharedModule
    ]
})
export class LocationModule { }
