import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { HeaderService } from '../shared/layout/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  showHolidays = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _meta: Meta,
    private _header: HeaderService,
    private _title: Title
  ) {
    this._setSeoData();

    const end = new Date(2019, 8, 8);
    const now = new Date();
    if (now < end) {
      this.showHolidays = true;
    }
  }

  ngOnInit() {
    this.createMap();
  }

  createMap() {
    if (isPlatformBrowser(this.platformId)) {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: 50.133442,
          lng: 8.5351918
        },
        zoom: 17,
        zoomControl: false,
        disableDefaultUI: true
      });

      new google.maps.Marker({
        animation: google.maps.Animation.BOUNCE,
        position: {
          lat: 50.133442,
          lng: 8.5351918
        },
        map: map
      });
    }
  }

  private _setSeoData() {
    this._header.title = 'Home';
    this._title.setTitle('Günstiges Nagelstudio für schöne Fingernägel in Sulzbach');
    this._meta.updateTag({ name: 'description', content: 'Professionelles Nagelstudio zu fairen Preisen in Sulzbach. Du suchst einen Profi für deine Nägel zu günstigen Preisen? Kunstnägel, Gelnägel, Maniküre, Nailart' });
    this._meta.updateTag({ name: 'keywords', content: 'nagelstudio,nageldesign,sulzbach,öffnungszeiten,maniküre,kontakt,adresse' });
  }
}
