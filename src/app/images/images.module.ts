import { ImagesComponent } from './images.component';
import { Routing } from './routes';
import { CommonModule } from '@angular/common/common';
import { NgModule } from '@angular/core/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

@NgModule({
    declarations: [
        ImagesComponent
    ],
    imports: [
        CommonModule,
        Routing,
        FlexLayoutModule,
        MaterialModule
    ],
    providers: [
    ],
    bootstrap: []
})
export class ImagesModule { }
