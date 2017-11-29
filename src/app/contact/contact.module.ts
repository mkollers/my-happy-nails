import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
        HttpClientModule,
        FlexLayoutModule,
        MatInputModule,
        MatSnackBarModule,
        MatButtonModule,
        MatCardModule
    ],
    providers: [
        ContactService
    ],
    bootstrap: []
})
export class ContactModule { }
