import { HomeComponent } from './home.component';
import { Routing } from './routes';
import { CommonModule } from '@angular/common/common';
import { NgModule } from '@angular/core/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

@NgModule({
    declarations: [
        HomeComponent
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
export class HomeModule { }
