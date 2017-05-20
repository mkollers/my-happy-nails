import { LocationComponent } from './location.component';
import { Routing } from './routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule } from '@angular/material';

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
