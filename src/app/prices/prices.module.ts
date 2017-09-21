import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule, MdListModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { PricesComponent } from './prices.component';
import { Routing } from './routes';

@NgModule({
    declarations: [
        PricesComponent
    ],
    imports: [
        CommonModule,
        Routing,
        FlexLayoutModule,
        MdCardModule,
        MdListModule,
        SharedModule
    ],
    providers: [
    ],
    bootstrap: []
})
export class PricesModule { }
