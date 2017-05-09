import { LocationComponent } from './location.component';
import { Routing } from './routes';
import { CommonModule } from '@angular/common/common';
import { NgModule } from '@angular/core/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        LocationComponent
    ],
    imports: [
        CommonModule,
        Routing,
        FlexLayoutModule,
        MdCardModule
    ],
    providers: [
    ],
    bootstrap: []
})
export class LocationModule { }
