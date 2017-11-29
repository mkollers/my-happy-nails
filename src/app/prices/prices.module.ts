import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

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
        MatCardModule,
        MatListModule,
        SharedModule
    ],
    providers: [
    ],
    bootstrap: []
})
export class PricesModule { }
