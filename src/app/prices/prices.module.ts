import { PricesComponent } from './prices.component';
import { Routing } from './routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule, MdListModule } from '@angular/material';

@NgModule({
    declarations: [
        PricesComponent
    ],
    imports: [
        CommonModule,
        Routing,
        FlexLayoutModule,
        MdCardModule,
        MdListModule
    ],
    providers: [
    ],
    bootstrap: []
})
export class PricesModule { }
