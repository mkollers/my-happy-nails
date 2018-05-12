import { AfterViewChecked, Component, HostBinding } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { join } from 'lodash';

import { Address } from '../shared/models/address';
import { RouterTransition } from '../shared/router-animation';
import { ToolbarService } from '../shared/services/toolbar.service';
import { INITIAL_STORE_DATA } from '../shared/store/store-data';

@Component({
  animations: [RouterTransition()],
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements AfterViewChecked {
  @HostBinding('@routerTransition') routerTransition = '';
  address: Address;
  phone: string;
  mail: string;

  constructor(
    private _meta: Meta,
    private _toolbar: ToolbarService,
    private _title: Title) {
    this.setSeoData();
    this.setData();
  }

  ngAfterViewChecked() {
    (window as any).prerenderReady = true;
  }

  private setData() {
    this.address = INITIAL_STORE_DATA.address;
    this.phone = INITIAL_STORE_DATA.phone;
    this.mail = INITIAL_STORE_DATA.mail;
  }

  private setSeoData() {
    this._toolbar.title$.next('Impressum');
    this._title.setTitle('Impressum');
    this._meta.updateTag({ name: 'description', content: '' })
    this._meta.updateTag({ name: 'keywords', content: join([], ',') })
  }
}
