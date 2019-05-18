import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
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
        FlexLayoutModule,
        MatCardModule
    ]
})
export class ImprintModule { }
