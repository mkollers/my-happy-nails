import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

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
        MatCommonModule,
        MatCardModule,
        MatListModule,
        MatIconModule
    ]
})
export class HomeModule { }
