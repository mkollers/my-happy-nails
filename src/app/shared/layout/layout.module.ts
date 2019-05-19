import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class LayoutModule { }
