import { ChangeDetectionStrategy, Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { RouterTransition } from './shared/router-animation';
import { isPlatformBrowser } from '@angular/common';

// declare ga as a function to set and sent the events
declare let ga: Function;

@Component({
  animations: [RouterTransition],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    private _router: Router
  ) {
    this._registerIcons();
  }

  getState = (outlet: RouterOutlet) => outlet.activatedRouteData.state;
  ngAfterViewInit = () => this._configureAnalytics();

  private _configureAnalytics() {
    // subscribe to router events and send page views to Google Analytics
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  private _registerIcons() {
    this._registerIcon('material', 'euro_symbol');
    this._registerIcon('material', 'menu');
    this._registerIcon('material', 'home');
    this._registerIcon('material', 'email');
    this._registerIcon('material', 'image');
    this._registerIcon('material', 'location_on');
    this._registerIcon('material', 'phone');

    this._registerIcon('social', 'facebook');
    this._registerIcon('social', 'github');
  }

  private _registerIcon(namespace: string, name: string) {
    const url = `assets/icons/${namespace}/${name}.svg`;
    this._iconRegistry.addSvgIconInNamespace(namespace, name, this._sanitizer.bypassSecurityTrustResourceUrl(url));
  }
}
