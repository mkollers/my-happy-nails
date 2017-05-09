import { HomeComponent } from './home.component';
import { Routing } from './routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule } from '@angular/material/card';
import { MdCoreModule } from '@angular/material/core';
import { MdListModule } from '@angular/material/list';

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
        MdListModule
    ],
    providers: [
    ],
    bootstrap: []
})
export class HomeModule { }
