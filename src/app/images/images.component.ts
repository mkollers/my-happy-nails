import { Image } from '../shared/models/image';
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
    let images = photo.images;
    images = _.filter(images, image => image.width >= el.clientWidth - 16);
    images = _.orderBy(images, image => image.width);

    const image = _.first(images);
    if (!image) {
      return undefined;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(image.source);
  }
}
