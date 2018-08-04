import { AfterViewChecked, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as _ from 'lodash';

import { ToolbarService } from '../shared/services/toolbar.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements AfterViewChecked {

  constructor(
    private _meta: Meta,
    private _toolbar: ToolbarService,
    private _title: Title
  ) {
    this.setSeoData();
  }

  ngAfterViewChecked() {
    (window as any).prerenderReady = true;
  }

  private setSeoData() {
    this._toolbar.title$.next('Datenschutzerklärung');
    this._title.setTitle('Datenschutzerklärung');
    this._meta.updateTag({ name: 'description', content: '' })
    this._meta.updateTag({ name: 'keywords', content: _.join([], ',') })
  }

}
