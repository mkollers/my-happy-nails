import { Component, HostBinding, OnInit, AfterViewChecked } from '@angular/core';
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
    private metaService: Meta,
    private toolbarService: ToolbarService,
    private titleService: Title) {
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
    this.toolbarService.title$.next('Impressum');
    this.titleService.setTitle('Impressum');
    this.metaService.updateTag({ name: 'description', content: '' })
    this.metaService.updateTag({ name: 'keywords', content: join([], ',') })
  }
}
