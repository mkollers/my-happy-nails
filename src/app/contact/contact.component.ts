import { Observable } from 'rxjs/Rx';
import { RouterTransition } from '../shared/router-animation';
import { UpdateTitleAction } from '../shared/store/actions/ui-actions';
import { ApplicationState } from '../shared/store/application-state';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  animations: [RouterTransition()],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition = '';
  phone$: Observable<string>;
  mail$: Observable<string>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.store.dispatch(new UpdateTitleAction('Kontakt'));

    this.phone$ = this.store.select(state => state.storeData.phone);
    this.mail$ = this.store.select(state => state.storeData.mail);
  }

}
