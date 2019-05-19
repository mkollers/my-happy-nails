import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { HeaderService } from '../shared/layout/services/header.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImprintComponent {

  constructor(
    private _meta: Meta,
    private _header: HeaderService,
    private _title: Title
  ) {
    this._setSeoData();
  }

  private _setSeoData() {
    this._header.title = 'Impressum';
    this._title.setTitle('Impressum');
    this._meta.updateTag({ name: 'description', content: '' })
    this._meta.updateTag({ name: 'keywords', content: '' })
  }
}
