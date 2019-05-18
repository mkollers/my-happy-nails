import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { HeaderService } from '../shared/layout/services/header.service';
import { Address } from '../shared/models/address';
import { INITIAL_STORE_DATA } from '../shared/store/store-data';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
  address: Address;
  phone: string;
  mail: string;

  constructor(
    private _meta: Meta,
    private _header: HeaderService,
    private _title: Title) {
    this.setSeoData();
    this.setData();
  }

  private setData() {
    this.address = INITIAL_STORE_DATA.address;
    this.phone = INITIAL_STORE_DATA.phone;
    this.mail = INITIAL_STORE_DATA.mail;
  }

  private setSeoData() {
    this._header.title = 'Impressum';
    this._title.setTitle('Impressum');
    this._meta.updateTag({ name: 'description', content: '' })
    this._meta.updateTag({ name: 'keywords', content: '' })
  }
}
