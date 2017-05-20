import { NavigationItem } from './shared/models/navigation-item';
import { ApplicationState } from './shared/store/application-state';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MdIconRegistry, MdSidenav } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Angulartics2GoogleAnalytics } from 'angulartics2/dist';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private susbcriptions: Subscription[] = [];
  sidenavItems$: Observable<NavigationItem[]>;
  footerItems$: Observable<NavigationItem[]>;
  title$: Observable<string>;
  sidenavOpened$: Observable<boolean>;

  @ViewChild('sidenav')
  sidenav: MdSidenav;

  constructor(
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private mdIconRegistry: MdIconRegistry,
    private media: ObservableMedia,
    private router: Router,
    private sanitizer: DomSanitizer,
    private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.mdIconRegistry.addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('assets/facebook.svg'));
    this.mdIconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg'));
    this.mdIconRegistry.addSvgIcon('google-plus', this.sanitizer.bypassSecurityTrustResourceUrl('assets/google-plus.svg'));
    this.mdIconRegistry.addSvgIcon('euro_symbol', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_euro_symbol.svg'));
    this.mdIconRegistry.addSvgIcon('menu', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_menu.svg'));
    this.mdIconRegistry.addSvgIcon('home', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_home.svg'));
    this.mdIconRegistry.addSvgIcon('mail', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_email.svg'));
    this.mdIconRegistry.addSvgIcon('image', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_image.svg'));
    this.mdIconRegistry.addSvgIcon('location_on', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_location_on.svg'));
    this.mdIconRegistry.addSvgIcon('phone', this.sanitizer.bypassSecurityTrustResourceUrl('assets/ic_phone.svg'));

    this.sidenavItems$ = this.store.select(state => state.uiState.sidenavItems);
    this.footerItems$ = this.store.select(state => state.uiState.footerItems);
    this.title$ = this.store.select(state => state.uiState.title);
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
