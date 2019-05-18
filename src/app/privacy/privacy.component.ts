import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { HeaderService } from '../shared/layout/services/header.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {

  constructor(
    private _meta: Meta,
    private _header: HeaderService,
    private _title: Title
  ) {
    this.setSeoData();
  }

  private setSeoData() {
    this._header.title = 'Datenschutzerklärung';
    this._title.setTitle('Datenschutzerklärung');
    this._meta.updateTag({ name: 'description', content: '' });
    this._meta.updateTag({ name: 'keywords', content: '' });
  }

}
