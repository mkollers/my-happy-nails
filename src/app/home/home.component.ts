import { Address } from '../shared/models/address';
import { Observable } from 'rxjs/Rx';
import { ApplicationState } from '../shared/store/application-state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as maps from 'google-maps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  address$: Observable<Address>;
  phone$: Observable<string>;
  mail$: Observable<string>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.address$ = this.store.map(state => state.storeData.address);
    this.phone$ = this.store.map(state => state.storeData.phone);
    this.mail$ = this.store.map(state => state.storeData.mail);

    this.createMap();
  }

  createMap() {
    this.store.subscribe(state => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: state.storeData.location,
        zoom: 17,
        zoomControl: false,
        zoomControlOptions: true,
        disableDefaultUI: true
      });

      const marker = new google.maps.Marker({
        animation: google.maps.Animation.BOUNCE,
        position: state.storeData.location,
        map: map
      });
    });
  }
}
