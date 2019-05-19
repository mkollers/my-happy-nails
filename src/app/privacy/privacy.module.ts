import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';

@NgModule({
  imports: [
    CommonModule,
    PrivacyRoutingModule,

    // Material
    MatCardModule
  ],
  declarations: [PrivacyComponent]
})
export class PrivacyModule { }
