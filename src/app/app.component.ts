import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { NavigationItem } from './shared/models/navigation-item';
import { ToolbarService } from './shared/services/toolbar.service';
import { INITIAL_UI_STATE } from './shared/store/ui-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private susbcriptions: Subscription[] = [];
  sidenavItems: NavigationItem[];
  footerItems: NavigationItem[];
  sidenavOpened$: Observable<boolean>;

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  constructor(
    private iconRegistry: MatIconRegistry,
    private media: ObservableMedia,
    private router: Router,
    private sanitizer: DomSanitizer,
    public toolbarService: ToolbarService) { }

  ngOnInit() {
    this.iconRegistry.addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('assets/facebook.svg'));
    this.iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg'));
    this.iconRegistry.addSvgIcon('google-plus', this.sanitizer.bypassSecurityTrustResourceUrl('assets/google-plus.svg'));
    this.iconRegistry.addSvgIcon('euro_symbol', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_euro_symbol.svg'));
    this.iconRegistry.addSvgIcon('menu', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_menu.svg'));
    this.iconRegistry.addSvgIcon('home', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_home.svg'));
    this.iconRegistry.addSvgIcon('mail', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_email.svg'));
    this.iconRegistry.addSvgIcon('image', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_image.svg'));
    this.iconRegistry.addSvgIcon('location_on', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_location_on.svg'));
    this.iconRegistry.addSvgIcon('phone', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_phone.svg'));

    this.sidenavItems = INITIAL_UI_STATE.sidenavItems;
    this.footerItems = INITIAL_UI_STATE.footerItems;
    this.sidenavOpened$ = this.media.asObservable()
      .map(value => {
        switch (value.mqAlias) {
          case 'xs':
          case 'sm':
            return false;
          default:
            return true;
        }
      }).startWith(false);

    const closeSidenav$ = this.router.events
      .filter(e => e instanceof NavigationEnd) // only on routing
      .withLatestFrom(this.sidenavOpened$) // only on mobile screens
      .map(([outer, inner]) => !inner) // for clearer next step...avoid tuple
      .filter(close => close) // trigger only if nav should be closed
      .do(() => this.sidenav.close());

    this.susbcriptions.push(closeSidenav$.subscribe());
  }

  ngOnDestroy() {
    for (const subscription of this.susbcriptions) {
      subscription.unsubscribe();
    }
  }
}
