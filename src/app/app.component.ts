import { NavigationItem } from './shared/models/navigation-item';
import { ApplicationState } from './shared/store/application-state';
import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidenavItems$: Observable<NavigationItem[]>;
  footerItems$: Observable<NavigationItem[]>;
  title$: Observable<string>;
  sidenavOpened$: Observable<boolean>;

  constructor(
    private mdIconRegistry: MdIconRegistry,
    private media: ObservableMedia,
    private sanitizer: DomSanitizer,
    private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.mdIconRegistry.addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('assets/facebook.svg'));
    this.mdIconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg'));
    this.mdIconRegistry.addSvgIcon('google-plus', this.sanitizer.bypassSecurityTrustResourceUrl('assets/google-plus.svg'));

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
      });
  }
}
