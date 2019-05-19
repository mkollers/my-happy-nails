import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { HeaderService } from '../shared/layout/services/header.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricesComponent {

  constructor(
    private _meta: Meta,
    private _header: HeaderService,
    private _title: Title
  ) {
    this._setSeoData();
  }

  private _setSeoData() {
    this._header.title = 'Preise und Hinweise';
    this._title.setTitle('Spare 30 Prozent als Neukunde in deinem Nagelstudio in Sulzbach');
    this._meta.updateTag({ name: 'description', content: '30 Prozent Neukunden-Rabatt - Auffüllen mit UV-Gel 40€ - Neumodellage mit UV-Gel ab 50€ - Maniküre ab 12€ - Gutes, preiswertes Nagelstudio in Sulzbach' });
    this._meta.updateTag({ name: 'keywords', content: 'nagelstudio,preise,leistungen,rabatte,kunstnägel,maniküre,gelnägel' });
  }
}
