import { AfterViewChecked, Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { join } from 'lodash';

import { Address } from '../shared/models/address';
import { ToolbarService } from '../shared/services/toolbar.service';
import { INITIAL_STORE_DATA } from '../shared/store/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  address: Address;
  phone: string;
  mail: string;
  showHolidays = false;

  constructor(
    private _meta: Meta,
    private _toolbar: ToolbarService,
    private _title: Title
  ) {
    this.setData();
    this.setSeoData();

    const end = new Date(2019, 5, 13);
    const now = new Date();
    if (now < end) {
      this.showHolidays = true;
    }
  }

  ngOnInit() {
    this.createMap();
  }

  createMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: INITIAL_STORE_DATA.location,
      zoom: 17,
      zoomControl: false,
      disableDefaultUI: true
    });

    const marker = new google.maps.Marker({
      animation: google.maps.Animation.BOUNCE,
      position: INITIAL_STORE_DATA.location,
      map: map
    });
  }

  private setData() {
    this.address = INITIAL_STORE_DATA.address;
    this.phone = INITIAL_STORE_DATA.phone;
    this.mail = INITIAL_STORE_DATA.mail;
  }

  private setSeoData() {
    this._toolbar.title$.next('Home');
    this._title.setTitle('Günstiges Nagelstudio für schöne Fingernägel in Sulzbach');
    this._meta.updateTag({ name: 'description', content: 'Professionelles Nagelstudio zu fairen Preisen in Sulzbach. Du suchst einen Profi für deine Nägel zu günstigen Preisen? Kunstnägel, Gelnägel, Maniküre, Nailart' })
    this._meta.updateTag({ name: 'keywords', content: join(['nagelstudio', 'nageldesign', 'sulzbach', 'öffnungszeiten', 'maniküre', 'kontakt', 'adresse'], ',') })
  }
}
