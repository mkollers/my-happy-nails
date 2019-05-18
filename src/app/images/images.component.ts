import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { HeaderService } from '../shared/layout/services/header.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesComponent {

  constructor(
    private _meta: Meta,
    private _header: HeaderService,
    private _title: Title
  ) {
    this._setSeoData();
  }

  private _setSeoData() {
    this._header.title = 'Bilder';
    this._title.setTitle('Bilder und Impresionen von modernem Nageldesign und Modellagen');
    this._meta.updateTag({ name: 'description', content: 'Aktuelle Bilder und Impressionen meiner Nagelmodellagen und anderer Arbeiten aus meinem Nagelstudio in Sulzbach (Taunus)' });
    this._meta.updateTag({ name: 'keywords', content: 'nagelstudio,nageldesign,sulzbach,bilder,eindrücke,gallerie,impressionen' });
  }
}
