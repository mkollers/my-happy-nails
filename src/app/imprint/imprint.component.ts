import { Address } from '../shared/models/address';
import { Observable } from 'rxjs/Rx';
import { RouterTransition } from '../shared/router-animation';
import { UpdateTitleAction } from '../shared/store/actions/ui-actions';
import { ApplicationState } from '../shared/store/application-state';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  animations: [RouterTransition()],
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition = '';
  address$: Observable<Address>;
  phone$: Observable<string>;
  mail$: Observable<string>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.store.dispatch(new UpdateTitleAction('Impressum'));

    this.address$ = this.store.select(state => state.storeData.address);
    this.phone$ = this.store.select(state => state.storeData.phone);
    this.mail$ = this.store.select(state => state.storeData.mail);
  }

}
