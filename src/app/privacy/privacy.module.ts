import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';

@NgModule({
  imports: [
    CommonModule,
    PrivacyRoutingModule,
    FlexLayoutModule,

    // Material
    MatCardModule
  ],
  declarations: [PrivacyComponent]
})
export class PrivacyModule { }
