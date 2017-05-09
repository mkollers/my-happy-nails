import { Photo } from '../shared/models/photo';
import { RouterTransition } from '../shared/router-animation';
import {
    UpdateDescriptionAction,
    UpdateHeaderAction,
    UpdateKeywordsAction,
    UpdateTitleAction
} from '../shared/store/actions/seo-actions';
import { ApplicationState } from '../shared/store/application-state';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { filter, first, orderBy } from 'lodash';
import { Observable } from 'rxjs/Observable';

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

    this.store.dispatch(new UpdateHeaderAction('Bilder'));
    this.store.dispatch(new UpdateTitleAction('Bilder und Impresionen von modernem Nageldesign und Modellagen'));
    this.store.dispatch(new UpdateKeywordsAction(['nagelstudio', 'nageldesign', 'sulzbach', 'bilder', 'eindrücke', 'gallerie', 'impressionen']));
    this.store.dispatch(new UpdateDescriptionAction('Aktuelle Bilder und Impressionen meiner Nagelmodellagen und anderer Arbeiten aus meinem Nagelstudio in Sulzbach (Taunus)'));
  }

  getImageUrl(photo: Photo, el: HTMLElement) {
    let images = photo.images;
    images = filter(images, image => image.width >= el.clientWidth - 16);
    images = orderBy(images, image => image.width);

    const image = first(images);
    if (!image) {
      return undefined;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(image.source);
  }
}
