import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule, MdCoreModule, MdIconModule, MdListModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { Routing } from './routes';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        Routing,
        FlexLayoutModule,
        MdCoreModule,
        MdCardModule,
        MdListModule,
        MdIconModule,
        SharedModule
    ]
})
export class HomeModule { }
