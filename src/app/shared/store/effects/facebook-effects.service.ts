import { environment } from '../../../../environments/environment';
import { FacebookService } from '../../services/facebook.service';
import {
  FACEBOOK,
  FacebookAccessTokenReceivedAction,
  LoadFacebookAccessTokenAction
} from '../actions/facebook-actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FacebookEffectsService {

  @Effect()
  accessToken$: Observable<Action> = this.actions$
    .ofType(FACEBOOK.LOAD_ACCESS_TOKEN)
    .startWith(new LoadFacebookAccessTokenAction())
    .flatMapTo(this.facebookService.getAccessToken(environment.facebook.appId, environment.facebook.appSecret))
    .map(accessToken => new FacebookAccessTokenReceivedAction(accessToken));

  constructor(
    private actions$: Actions,
    private facebookService: FacebookService) { }

}
