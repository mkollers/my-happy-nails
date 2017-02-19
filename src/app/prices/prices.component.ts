import { ServiceCategory } from '../shared/models/service-category';
import { Observable } from 'rxjs/Rx';
import { RouterTransition } from '../shared/router-animation';
import { UpdateTitleAction } from '../shared/store/actions/ui-actions';
import { ApplicationState } from '../shared/store/application-state';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  animations: [RouterTransition()],
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition = '';
  services$: Observable<ServiceCategory[]>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.store.dispatch(new UpdateTitleAction('Preise'));

    this.services$ = this.store.select(state => state.storeData.services);
  }

}
