import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ImprintComponent } from './imprint.component';
import { Routing } from './routes';

@NgModule({
    declarations: [
        ImprintComponent
    ],
    imports: [
        CommonModule,
        Routing,

        // Material
        MatCardModule
    ]
})
export class ImprintModule { }
