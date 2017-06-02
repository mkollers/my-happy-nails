import { ServiceCategory } from '../shared/models/service-category';
import { RouterTransition } from '../shared/router-animation';
import {
    UpdateDescriptionAction,
    UpdateHeaderAction,
    UpdateKeywordsAction,
    UpdateTitleAction
} from '../shared/store/actions/seo-actions';
import { ApplicationState } from '../shared/store/application-state';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  animations: [RouterTransition()],
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition = '';
  services$: Observable<ServiceCategory[]>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.store.dispatch(new UpdateHeaderAction('Preise und Hinweise'));
    this.store.dispatch(new UpdateTitleAction('Spare 50 Prozent als Neukunde in deinem Nagelstudio in Sulzbach'));
    this.store.dispatch(new UpdateKeywordsAction(['nagelstudio', 'preise', 'leistungen', 'rabatte', 'kunstnägel', 'maniküre', 'gelnägel']));
    this.store.dispatch(new UpdateDescriptionAction('50 Prozent Neukunden-Rabatt - Auffüllen mit UV-Gel 40€ - Neumodellage mit UV-Gel ab 50€ - Maniküre ab 12€ - Gutes, preiswertes Nagelstudio in Sulzbach'));

    this.services$ = this.store.select(state => state.storeData.services);

    (window as any).prerenderReady = true;
  }

}
