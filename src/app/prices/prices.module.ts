import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './prices.component';

@NgModule({
    declarations: [
        PricesComponent
    ],
    imports: [
        CommonModule,
        PricesRoutingModule,

        // Material
        MatCardModule,
        MatListModule
    ]
})
export class PricesModule { }
