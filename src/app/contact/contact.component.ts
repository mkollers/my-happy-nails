import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';
import { join } from 'lodash';

import { RouterTransition } from '../shared/router-animation';
import { ToolbarService } from '../shared/services/toolbar.service';
import { INITIAL_STORE_DATA } from '../shared/store/store-data';
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
  phone: string;
  mail: string;

  constructor(
    private contactService: ContactService,
    private metaService: Meta,
    private snack: MatSnackBar,
    private toolbarService: ToolbarService,
    private titleService: Title) {
    this.setSeoData();
    this.setData();
    this.createFormGroup();
  }

  ngOnInit() {
    (window as any).prerenderReady = true;
  }

  async send(message: Message) {
    try {
      await this.contactService.sendMail(message).toPromise();

      this.snack.open('Nachricht erfolgreich versendet', '', { duration: 5000 });
    } catch (err) {
      this.snack.open('Hoppla, da ist wohl etwas schief gelaufen...');
    };
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

  private setData() {
    this.phone = INITIAL_STORE_DATA.phone;
    this.mail = INITIAL_STORE_DATA.mail;
  }

  private setSeoData() {
    this.titleService.setTitle('Wie kannst du mich erreichen? Telefonnumer und Email-Adresse findest du hier');
    this.toolbarService.title$.next('Kontakt');
    this.metaService.updateTag({ name: 'description', content: '30 Prozent Neukunden-Rabatt - Auffüllen mit UV-Gel 40€ - Neumodellage mit UV-Gel ab 50€ - Maniküre ab 12€ - Gutes, preiswertes Nagelstudio in Sulzbach (Taunus)' })
    this.metaService.updateTag({ name: 'keywords', content: join(['nagelstudio', 'kontakt', 'sulzbach', 'telefon', 'email', 'nachricht'], ',') })
  }
}
