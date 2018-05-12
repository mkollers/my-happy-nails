import { AfterViewChecked, Component, HostBinding } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { join } from 'lodash';

import { ServiceCategory } from '../shared/models/service-category';
import { RouterTransition } from '../shared/router-animation';
import { ToolbarService } from '../shared/services/toolbar.service';
import { INITIAL_STORE_DATA } from '../shared/store/store-data';

@Component({
  animations: [RouterTransition()],
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements AfterViewChecked {
  @HostBinding('@routerTransition') routerTransition = '';
  services: ServiceCategory[];

  constructor(
    private _meta: Meta,
    private _toolbar: ToolbarService,
    private _title: Title
  ) {
    this.setSeoData();
    this.setData();
  }

  ngAfterViewChecked() {
    (window as any).prerenderReady = true;
  }

  private setData() {
    this.services = INITIAL_STORE_DATA.services;
  }

  private setSeoData() {
    this._toolbar.title$.next('Preise und Hinweise');
    this._title.setTitle('Spare 30 Prozent als Neukunde in deinem Nagelstudio in Sulzbach');
    this._meta.updateTag({ name: 'description', content: '30 Prozent Neukunden-Rabatt - Auffüllen mit UV-Gel 40€ - Neumodellage mit UV-Gel ab 50€ - Maniküre ab 12€ - Gutes, preiswertes Nagelstudio in Sulzbach' })
    this._meta.updateTag({ name: 'keywords', content: join(['nagelstudio', 'preise', 'leistungen', 'rabatte', 'kunstnägel', 'maniküre', 'gelnägel'], ',') })
  }
}
