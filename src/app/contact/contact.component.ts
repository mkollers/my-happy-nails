import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { RouterTransition } from '../shared/router-animation';
import {
  UpdateDescriptionAction,
  UpdateHeaderAction,
  UpdateKeywordsAction,
  UpdateTitleAction,
} from '../shared/store/actions/seo-actions';
import { ApplicationState } from '../shared/store/application-state';
import { ContactService } from './contact.service';
import { Message } from './message';

@Component({
  animations: [RouterTransition()],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition = '';
  formGroup: FormGroup;
  phone$: Observable<string>;
  mail$: Observable<string>;

  constructor(
    private contactService: ContactService,
    private snack: MdSnackBar,
    private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.store.dispatch(new UpdateHeaderAction('Kontakt'));
    this.store.dispatch(new UpdateTitleAction('Wie kannst du mich erreichen? Telefonnumer und Email-Adresse findest du hier'));
    this.store.dispatch(new UpdateKeywordsAction(['nagelstudio', 'kontakt', 'sulzbach', 'telefon', 'email', 'nachricht']));
    this.store.dispatch(new UpdateDescriptionAction('50 Prozent Neukunden-Rabatt - Auffüllen mit UV-Gel 40€ - Neumodellage mit UV-Gel ab 50€ - Maniküre ab 12€ - Gutes, preiswertes Nagelstudio in Sulzbach (Taunus)'));

    this.phone$ = this.store.select(state => state.storeData.phone);
    this.mail$ = this.store.select(state => state.storeData.mail);

    this.createFormGroup();

    (window as any).prerenderReady = true;
  }

  send(message: Message) {
    this.contactService.sendMail(message)
      .subscribe(
      () => {
        this.snack.open('Nachricht erfolgreich versendet', '', {
          duration: 5000
        });
      },
      err => this.snack.open('Hoppla, da ist etwas schief gelaufen...')
      );
  }

  private createFormGroup() {
    this.formGroup = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required)
    });
  }
}
