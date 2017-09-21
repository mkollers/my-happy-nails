import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { INITIAL_STORE_DATA } from 'app/shared/store/store-data';
import { join } from 'lodash';

import { ServiceCategory } from '../shared/models/service-category';
import { RouterTransition } from '../shared/router-animation';
import { ToolbarService } from '../shared/services/toolbar.service';

@Component({
  animations: [RouterTransition()],
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition = '';
  services: ServiceCategory[];

  constructor(
    private metaService: Meta,
    private toolbarService: ToolbarService,
    private titleService: Title
  ) {
    this.setSeoData();
    this.setData();
  }

  ngOnInit() {
    (window as any).prerenderReady = true;
  }

  private setData() {
    this.services = INITIAL_STORE_DATA.services;
  }

  private setSeoData() {
    this.toolbarService.title$.next('Preise und Hinweise');
    this.titleService.setTitle('Spare 50 Prozent als Neukunde in deinem Nagelstudio in Sulzbach');
    this.metaService.updateTag({ name: 'description', content: '50 Prozent Neukunden-Rabatt - Auffüllen mit UV-Gel 40€ - Neumodellage mit UV-Gel ab 50€ - Maniküre ab 12€ - Gutes, preiswertes Nagelstudio in Sulzbach' })
    this.metaService.updateTag({ name: 'keywords', content: join(['nagelstudio', 'preise', 'leistungen', 'rabatte', 'kunstnägel', 'maniküre', 'gelnägel'], ',') })
  }
}
