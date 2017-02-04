import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LocationComponent } from './location/location.component';
import { PricesComponent } from './prices/prices.component';
import { AppRoutes } from './routes';
import { Services } from './shared/services';
import { ApplicationState, INITIAL_APPLICATION_STATE } from './shared/store/application-state';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Action, StoreModule } from '@ngrx/store';

export function storeReducer(state: ApplicationState, action: Action) {
  // switch (action.type) {
  //   case CHANGE_TITLE_ACTION:
  //     return handle(state, action as ChangeTitleAction);
  //   default:
  return state;
  //  }
}

// export function handle(state: ApplicationState, action: ChangeTitleAction): ApplicationState {
//   const knowledges = action.payload;
//   const newState: ApplicationState = Object.assign({}, state);

//   newState.uiState.knowledges = knowledges;

//   return newState;
// }

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
    FlexLayoutModule.forRoot(),
    StoreModule.provideStore(storeReducer, INITIAL_APPLICATION_STATE)
  ],
  providers: [
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
