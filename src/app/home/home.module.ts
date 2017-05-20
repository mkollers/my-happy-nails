import { HomeComponent } from './home.component';
import { Routing } from './routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule, MdCoreModule, MdListModule, MdIconModule } from '@angular/material';

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
        MdIconModule
    ],
    providers: [
    ],
    bootstrap: []
})
export class HomeModule { }
