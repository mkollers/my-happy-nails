import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCardModule, MdInputModule, MdSnackBarModule } from '@angular/material';

import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { Routing } from './routes';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        Routing,
        ReactiveFormsModule,
        HttpModule,
        FlexLayoutModule,
        MdInputModule,
        MdSnackBarModule,
        MdButtonModule,
        MdCardModule
    ],
    providers: [
        ContactService
    ],
    bootstrap: []
})
export class ContactModule { }
