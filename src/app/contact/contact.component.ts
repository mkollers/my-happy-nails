import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

import { HeaderService } from '../shared/layout/services/header.service';
import { ContactService } from './contact.service';
import { Message } from './message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  formGroup: FormGroup;

  constructor(
    private _contactService: ContactService,
    private _header: HeaderService,
    private _meta: Meta,
    private _snack: MatSnackBar,
    private _title: Title
  ) {
    this._setSeoData();
    this._createFormGroup();
  }

  async send(message: Message) {
    try {
      await this._contactService.sendMail(message).toPromise();

      this._snack.open('Nachricht erfolgreich versendet', '', { duration: 5000 });
    } catch (err) {
      this._snack.open('Hoppla, da ist wohl etwas schief gelaufen...');
    };
  }

  private _createFormGroup() {
    this.formGroup = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required)
    });
  }

  private _setSeoData() {
    this._title.setTitle('Wie kannst du mich erreichen? Telefonnumer und Email-Adresse findest du hier');
    this._header.title = 'Kontakt';
    this._meta.updateTag({ name: 'description', content: '30 Prozent Neukunden-Rabatt - Auffüllen mit UV-Gel 40€ - Neumodellage mit UV-Gel ab 50€ - Maniküre ab 12€ - Gutes, preiswertes Nagelstudio in Sulzbach (Taunus)' });
    this._meta.updateTag({ name: 'keywords', content: 'nagelstudio,kontakt,sulzbach,telefon,email,nachricht' });
  }
}
