import { ImprintComponent } from './imprint.component';
import { Routing } from './routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

@NgModule({
    declarations: [
        ImprintComponent
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
export class ImprintModule { }
