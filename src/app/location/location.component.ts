import { Address } from '../shared/models/address';
import { RouterTransition } from '../shared/router-animation';
import {
  UpdateDescriptionAction,
  UpdateHeaderAction,
  UpdateKeywordsAction,
  UpdateTitleAction
} from '../shared/store/actions/seo-actions';
import { ApplicationState } from '../shared/store/application-state';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  animations: [RouterTransition()],
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  @HostBinding('@routerTransition') routerTransition = '';
  mapSubscription: Subscription;
  address$: Observable<Address>;
  iFrameUrl$: Observable<SafeResourceUrl>;

  constructor(
    private sanitizer: DomSanitizer,
    private store: Store<ApplicationState>
  ) { }

  ngOnInit() {
    this.address$ = this.store.select(state => state.storeData.address);
    this.iFrameUrl$ = this.store.select(state => this.sanitizer.bypassSecurityTrustResourceUrl(state.uiState.location.iFrameUrl));

    this.store.dispatch(new UpdateHeaderAction('Anfahrt'));
    this.store.dispatch(new UpdateTitleAction('Wo findest du mich? Addresse meines Studios, Parkplätze und Wegbeschreibung'));
    this.store.dispatch(new UpdateKeywordsAction(['nagelstudio', 'sulzbach', 'taunus', 'frankfurt', 'anfahrt', 'parken', 'main-taunus-kreis']));
    this.store.dispatch(new UpdateDescriptionAction('Mein Nagelstudio findest du im Falkensteiner Weg 10 in 65843 Sulzbach (Taunus). Kostenlose öffentliche Parkplätze findest du in den eingezeichneten Flächen.'));
    this.createMap();
  }

  ngOnDestroy() {
    this.mapSubscription.unsubscribe();
  }

  createMap() {
    this.mapSubscription = this.store.select(state => state.storeData.location)
      .debounceTime(200)
      .subscribe(location => {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 17,
          zoomControl: false,
          zoomControlOptions: true,
          disableDefaultUI: true
        });

        const marker = new google.maps.Marker({
          animation: google.maps.Animation.BOUNCE,
          position: location,
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
      });
  }

  private createParkingLot(paths: Array<google.maps.LatLng | google.maps.LatLngLiteral>) {
    return new google.maps.Polygon({
      paths: paths,
      strokeColor: '#AB47BC',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#D5A3DE',
      fillOpacity: 0.35
    });
  }
}
