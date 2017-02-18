import { ObservableMedia } from '@angular/flex-layout';
import { DomSanitizer } from '@angular/platform-browser';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import { Observable } from 'rxjs/Rx';
import { Photo } from '../shared/models/photo';
import { RouterTransition } from '../shared/router-animation';
import { UpdateTitleAction } from '../shared/store/actions/ui-actions';
import { ApplicationState } from '../shared/store/application-state';
import { Store } from '@ngrx/store';
import { Component, HostBinding, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  animations: [RouterTransition()],
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition = '';
  photos$: Observable<Photo[]>;

  constructor(
    private sanitizer: DomSanitizer,
    private media: ObservableMedia,
    private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.photos$ = this.store.select(state => state.storeData.photos);

    this.store.dispatch(new UpdateTitleAction('Bilder'));
  }

  getImageUrl(photo: Photo, el: HTMLElement) {
    return Observable.of(photo.images)
      .map(images => _.filter(images, image => image.width >= el.clientWidth - 16))
      .map(images => _.orderBy(images, image => image.width))
      .map(images => _.first(images))
      .map(image => this.sanitizer.bypassSecurityTrustResourceUrl(image.source as string));
  }
}
