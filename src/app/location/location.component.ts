import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeResourceUrl, Title } from '@angular/platform-browser';
import { join } from 'lodash';

import { HeaderService } from '../shared/layout/services/header.service';
import { Address } from '../shared/models/address';
import { INITIAL_STORE_DATA } from '../shared/store/store-data';
import { INITIAL_UI_STATE } from '../shared/store/ui-state';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  address: Address;
  iFrameUrl: SafeResourceUrl;

  constructor(
    private _meta: Meta,
    private _sanitizer: DomSanitizer,
    private _header: HeaderService,
    private _title: Title
  ) {
    this.setSeoData();
    this.setData();
  }

  ngOnInit() {
    this.createMap();
  }

  private createMap() {
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

    const p1 = this.createParkingLot([
      { lat: 50.133413, lng: 8.536197 },
      { lat: 50.133339, lng: 8.536241 },
      { lat: 50.133199, lng: 8.535440 },
      { lat: 50.133217, lng: 8.535429 }
    ]);
    p1.setMap(map);

    const p2 = this.createParkingLot([
      { lat: 50.132961, lng: 8.534007 },
      { lat: 50.132986, lng: 8.534043 },
      { lat: 50.133194, lng: 8.533713 },
      { lat: 50.133171, lng: 8.533675 }
    ]);
    p2.setMap(map);
  }

  private createParkingLot(paths: Array<google.maps.LatLngLiteral>) {
    return new google.maps.Polygon({
      paths: paths,
      strokeColor: '#AB47BC',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#D5A3DE',
      fillOpacity: 0.35
    });
  }

  private setData() {
    this.address = INITIAL_STORE_DATA.address;
    this.iFrameUrl = this._sanitizer.bypassSecurityTrustResourceUrl(INITIAL_UI_STATE.location.iFrameUrl);
  }

  private setSeoData() {
    this._header.title = 'Anfahrt';
    this._title.setTitle('Wo findest du mich? Addresse meines Studios, Parkplätze und Wegbeschreibung');
    this._meta.updateTag({ name: 'description', content: 'Mein Nagelstudio findest du im Falkensteiner Weg 10 in 65843 Sulzbach (Taunus). Kostenlose öffentliche Parkplätze findest du in den eingezeichneten Flächen.' })
    this._meta.updateTag({ name: 'keywords', content: join(['nagelstudio', 'sulzbach', 'taunus', 'frankfurt', 'anfahrt', 'parken', 'main-taunus-kreis'], ',') })
  }
}
