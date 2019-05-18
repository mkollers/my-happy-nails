import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './images.component';

@NgModule({
    declarations: [
        ImagesComponent
    ],
    imports: [
        CommonModule,
        ImagesRoutingModule
    ]
})
export class ImagesModule { }
