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
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  animations: [RouterTransition()],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @HostBinding('@routerTransition') routerTransition = '';
  mapSubscription: Subscription;
  address$: Observable<Address>;
  phone$: Observable<string>;
  mail$: Observable<string>;

  constructor(
    private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.address$ = this.store.select(state => state.storeData.address);
    this.phone$ = this.store.select(state => state.storeData.phone);
    this.mail$ = this.store.select(state => state.storeData.mail);

    this.store.dispatch(new UpdateHeaderAction('Home'));
    this.store.dispatch(new UpdateTitleAction('Günstiges Nagelstudio für schöne Fingernägel in Sulzbach'));
    this.store.dispatch(new UpdateKeywordsAction(['nagelstudio', 'nageldesign', 'sulzbach', 'öffnungszeiten', 'maniküre', 'kontakt', 'adresse']));
    this.store.dispatch(new UpdateDescriptionAction('Professionelles Nagelstudio zu fairen Preisen in Sulzbach. Du suchst einen Profi für deine Nägel zu günstigen Preisen? Kunstnägel, Gelnägel, Maniküre, Nailart'));

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
