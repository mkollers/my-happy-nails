import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LocationComponent } from './location/location.component';
import { PricesComponent } from './prices/prices.component';
import { AppRoutes } from './routes';
import { Services } from './shared/services';
import { storeReducer } from './shared/store/reducers/store-reducer';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricesComponent,
    ImagesComponent,
    ContactComponent,
    LocationComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    MaterialModule.forRoot(),
    FlexLayoutModule,
    StoreModule.provideStore(storeReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
