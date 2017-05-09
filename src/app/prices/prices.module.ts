import { PricesComponent } from './prices.component';
import { Routing } from './routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule} from '@angular/material/card';
import { MdListModule } from '@angular/material/list';

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
