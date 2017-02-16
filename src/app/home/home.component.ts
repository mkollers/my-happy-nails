import { Address } from '../shared/models/address';
import { UpdateTitleAction } from '../shared/store/actions/ui-actions';
import { ApplicationState } from '../shared/store/application-state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  mapSubscription: Subscription;
  address$: Observable<Address>;
  phone$: Observable<string>;
  mail$: Observable<string>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.address$ = this.store.select(state => state.storeData.address);
    this.phone$ = this.store.select(state => state.storeData.phone);
    this.mail$ = this.store.select(state => state.storeData.mail);

    this.store.dispatch(new UpdateTitleAction('Home'));

    this.createMap();
  }

  ngOnDestroy() {
    this.mapSubscription.unsubscribe();
  }

  createMap() {
    this.mapSubscription = this.store
      .select(state => state.storeData.location)
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
      });
  }
}
