import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { FacebookService } from './services/facebook.service';
import { ToolbarService } from './services/toolbar.service';
import { SidenavComponent } from './layout/components/sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        FacebookService,
        ToolbarService
      ]
    };
  }
}
