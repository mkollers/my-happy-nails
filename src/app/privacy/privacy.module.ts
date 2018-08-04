import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { SharedModule } from '../shared/shared.module';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';

@NgModule({
  imports: [
    CommonModule,
    PrivacyRoutingModule,
    FlexLayoutModule,

    // Material
    MatCardModule,

    // Custom
    SharedModule
  ],
  declarations: [PrivacyComponent]
})
export class PrivacyModule { }
