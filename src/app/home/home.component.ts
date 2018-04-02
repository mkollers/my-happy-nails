import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { join } from 'lodash';

import { Address } from '../shared/models/address';
import { RouterTransition } from '../shared/router-animation';
import { ToolbarService } from '../shared/services/toolbar.service';
import { INITIAL_STORE_DATA } from '../shared/store/store-data';

@Component({
  animations: [RouterTransition()],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition = '';
  address: Address;
  phone: string;
  mail: string;
  showHolidays = false;

  constructor(
    private metaService: Meta,
    private toolbarService: ToolbarService,
    private titleService: Title) {
    this.setData();
    this.setSeoData();

    const end = new Date(2018, 3, 26);
    const now = new Date();
    if (now < end) {
      this.showHolidays = true;
    }
  }

  ngOnInit() {
    this.createMap();
    (window as any).prerenderReady = true;
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
    this.toolbarService.title$.next('Home');
    this.titleService.setTitle('Günstiges Nagelstudio für schöne Fingernägel in Sulzbach');
    this.metaService.updateTag({ name: 'description', content: 'Professionelles Nagelstudio zu fairen Preisen in Sulzbach. Du suchst einen Profi für deine Nägel zu günstigen Preisen? Kunstnägel, Gelnägel, Maniküre, Nailart' })
    this.metaService.updateTag({ name: 'keywords', content: join(['nagelstudio', 'nageldesign', 'sulzbach', 'öffnungszeiten', 'maniküre', 'kontakt', 'adresse'], ',') })
  }
}
