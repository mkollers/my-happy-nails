import { AppComponent } from './app.component';
import { AppRoutes } from './routes';
import { Services } from './shared/services';
import { Effects } from './shared/store/effects';
import { storeReducer } from './shared/store/reducers/store-reducer';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular/material/button';
import { MdIconModule } from '@angular/material/icon';
import { MdSidenavModule } from '@angular/material/sidenav';
import { MdToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FlexLayoutModule,
    MdSidenavModule, MdToolbarModule, MdButtonModule, MdIconModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.provideStore(storeReducer),
    ...Effects,
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  providers: [
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
