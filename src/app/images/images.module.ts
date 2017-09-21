import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { ImagesComponent } from './images.component';
import { Routing } from './routes';

@NgModule({
    declarations: [
        ImagesComponent
    ],
    imports: [
        CommonModule,
        Routing,
        FlexLayoutModule,
        MdCardModule,
        SharedModule
    ]
})
export class ImagesModule { }
