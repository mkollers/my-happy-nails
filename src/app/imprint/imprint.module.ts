import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ImprintRoutingModule } from './imprint-routing.module';
import { ImprintComponent } from './imprint.component';

@NgModule({
    declarations: [
        ImprintComponent
    ],
    imports: [
        CommonModule,
        ImprintRoutingModule,

        // Material
        MatCardModule
    ]
})
export class ImprintModule { }
