import { Photo } from '../../models/photo';
import { ApplicationState } from '../application-state';
import { environment } from '../../../../environments/environment';
import { FacebookService } from '../../services/facebook.service';
import {
  FACEBOOK,
  FacebookAccessTokenReceivedAction,
  FacebookPhotosLoadedAction,
  LoadFacebookAccessTokenAction,
  LoadFacebookPhotosAction
} from '../actions/facebook-actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FacebookEffectsService {

  @Effect()
  accessToken$: Observable<Action> = this.actions$
    .ofType(FACEBOOK.LOAD_ACCESS_TOKEN)
    .startWith(new LoadFacebookAccessTokenAction())
    .flatMapTo(this.facebookService.getAccessToken(environment.facebook.appId, environment.facebook.appSecret))
    .map(accessToken => new FacebookAccessTokenReceivedAction(accessToken));

  @Effect()
  photos$: Observable<Action> = this.actions$
    .ofType(FACEBOOK.LOAD_PHOTOS)
    .startWith(new LoadFacebookPhotosAction())
    .flatMapTo(this.store.select(state => state.uiState.facebook.accessToken))
    .flatMap(accessToken => this.facebookService.getPhotos(accessToken, environment.facebook.albumId))
    .withLatestFrom(this.store.select(state => state.uiState.facebook.accessToken))
    .flatMap(([photos, accessToken]) => {
      const images$ = [];
      for (const photo of photos) {
        images$.push(this.facebookService.getImages(accessToken, photo.id).map(images => photo.images = images).mapTo(photo));
      }
      return Observable.forkJoin(images$)
        .catch(err => Observable.of([]));
    })
    .map(photos => new FacebookPhotosLoadedAction(photos));

  constructor(
    private actions$: Actions,
    private facebookService: FacebookService,
    private store: Store<ApplicationState>) { }

}
