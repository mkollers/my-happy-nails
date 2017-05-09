import { SEO } from '../actions/seo-actions';
import { Injectable } from '@angular/core';
import { MetaService } from '@nglibs/meta';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { join } from 'lodash';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SeoEffectsService {

  @Effect({ dispatch: false })
  updateDescription$: Observable<Action> = this.actions$
    .ofType(SEO.UPDATE_DESCRIPTION_ACTION)
    .map(action => action.payload)
    .do(description => this.metaService.setTag('description', description));

  @Effect({ dispatch: false })
  updateTitle$: Observable<Action> = this.actions$
    .ofType(SEO.UPDATE_TITLE_ACTION)
    .map(action => action.payload)
    .do(title => setTimeout(() => { this.metaService.setTitle(title); })); // Workaround: https://github.com/vinaygopinath/ng2-meta/issues/7

  @Effect({ dispatch: false })
  updateKeywords$: Observable<Action> = this.actions$
    .ofType(SEO.UPDATE_KEYWORDS_ACTION)
    .map(action => action.payload)
    .do(keywords => this.metaService.setTag('keywords', join(keywords, ',')));

  constructor(
    private actions$: Actions,
    private metaService: MetaService
  ) { }
}
