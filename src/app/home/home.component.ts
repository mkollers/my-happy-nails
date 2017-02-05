import { Address } from '../shared/models/address';
import { Observable } from 'rxjs/Rx';
import { ApplicationState } from '../shared/store/application-state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

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
  }
}
