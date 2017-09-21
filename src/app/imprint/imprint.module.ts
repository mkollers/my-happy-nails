import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
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
        MdCardModule,
        SharedModule
    ]
})
export class ImprintModule { }
