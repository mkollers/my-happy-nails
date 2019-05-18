import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

import { NavigationItem } from './shared/models/navigation-item';
import { RouterTransition } from './shared/router-animation';
import { ToolbarService } from './shared/services/toolbar.service';
import { INITIAL_UI_STATE } from './shared/store/ui-state';

// declare ga as a function to set and sent the events
declare let ga: Function;

@Component({
  animations: [RouterTransition],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private _subscriptions: Subscription[] = [];
  sidenavItems: NavigationItem[];
  footerItems: NavigationItem[];
  mode: 'over' | 'push' | 'side' = 'side';
  opened = true;

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    breakpointObserver: BreakpointObserver,
    private _router: Router,
    public toolbarService: ToolbarService
  ) {
    this.registerIcons();
    this._configureAnalytics();

    // subscribe event which will be triggered every time, the screen-size switches between small and large
    this._subscriptions.push(
      breakpointObserver.observe('(max-width: 959px)').pipe(
        map(state => state.matches),
        distinctUntilChanged(),
        tap(isSmall => this.screenSizeChanged(isSmall))
      ).subscribe()
    );

    this._subscriptions.push(
      _router.events.pipe(
        filter(e => e instanceof NavigationEnd), // only on routing
        filter(e => this.mode === 'over'), // only on smalls screens
        tap(() => this.sidenav.close()),
        tap(() => _changeDetectorRef.markForCheck())
      ).subscribe()
    );

    this.sidenavItems = INITIAL_UI_STATE.sidenavItems;
    this.footerItems = INITIAL_UI_STATE.footerItems;
  }

  ngOnDestroy() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  private _configureAnalytics() {
    // subscribe to router events and send page views to Google Analytics
    this._router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  private registerIcons() {
    this.registerIcon('material', 'euro_symbol');
    this.registerIcon('material', 'menu');
    this.registerIcon('material', 'home');
    this.registerIcon('material', 'email');
    this.registerIcon('material', 'image');
    this.registerIcon('material', 'location_on');
    this.registerIcon('material', 'phone');

    this.registerIcon('social', 'facebook');
    this.registerIcon('social', 'github');
    this.registerIcon('social', 'google-plus');
  }

  private registerIcon(namespace: string, name: string) {
    const url = `assets/icons/${namespace}/${name}.svg`;
    this._iconRegistry.addSvgIconInNamespace(namespace, name, this._sanitizer.bypassSecurityTrustResourceUrl(url));
  }

  private screenSizeChanged(isSmall: boolean) {
    if (isSmall) {
      this.opened = false;
      this.mode = 'over';
    } else {
      this.opened = true;
      this.mode = 'side';
    }
    this._changeDetectorRef.markForCheck();
  }
}
