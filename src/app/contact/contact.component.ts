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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition = '';
  phone$: Observable<string>;
  mail$: Observable<string>;

  constructor(
    private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.store.dispatch(new UpdateHeaderAction('Kontakt'));
    this.store.dispatch(new UpdateTitleAction('Wie kannst du mich erreichen? Telefonnumer und Email-Adresse findest du hier'));
    this.store.dispatch(new UpdateKeywordsAction(['nagelstudio', 'kontakt', 'sulzbach', 'telefon', 'email', 'nachricht']));
    this.store.dispatch(new UpdateDescriptionAction('50 Prozent Neukunden-Rabatt - Auffüllen mit UV-Gel 40€ - Neumodellage mit UV-Gel ab 50€ - Maniküre ab 12€ - Gutes, preiswertes Nagelstudio in Sulzbach (Taunus)'));

    this.phone$ = this.store.select(state => state.storeData.phone);
    this.mail$ = this.store.select(state => state.storeData.mail);

    (window as any).prerenderReady = true;
  }

}
