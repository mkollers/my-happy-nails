import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { HeaderService } from '../shared/layout/services/header.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _meta: Meta,
    private _header: HeaderService,
    private _title: Title
  ) {
    this.setSeoData();
  }

  ngOnInit() {
    this.createMap();
  }

  private createMap() {
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

  private setSeoData() {
    this._header.title = 'Anfahrt';
    this._title.setTitle('Wo findest du mich? Addresse meines Studios, Parkplätze und Wegbeschreibung');
    this._meta.updateTag({ name: 'description', content: 'Mein Nagelstudio findest du im Falkensteiner Weg 10 in 65843 Sulzbach (Taunus). Kostenlose öffentliche Parkplätze findest du in den eingezeichneten Flächen.' })
    this._meta.updateTag({ name: 'keywords', content: 'nagelstudio,sulzbach,taunus,frankfurt,anfahrt,parken,main-taunus-kreis' })
  }
}
