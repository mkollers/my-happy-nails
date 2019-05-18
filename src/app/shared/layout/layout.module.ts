import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';

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
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class LayoutModule { }
