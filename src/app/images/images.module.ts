import { ImagesComponent } from './images.component';
import { Routing } from './routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        ImagesComponent
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
export class ImagesModule { }
