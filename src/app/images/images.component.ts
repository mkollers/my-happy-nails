import { AfterViewChecked, Component, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { filter, first, join, orderBy } from 'lodash';
import { map, mapTo, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Photo } from '../shared/models/photo';
import { RouterTransition } from '../shared/router-animation';
import { FacebookService } from '../shared/services/facebook.service';
import { ToolbarService } from '../shared/services/toolbar.service';

@Component({
  animations: [RouterTransition()],
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit, AfterViewChecked {
  @HostBinding('@routerTransition') routerTransition = '';
  photos: Photo[] = [];

  constructor(
    private _facebookService: FacebookService,
    private _meta: Meta,
    private _sanitizer: DomSanitizer,
    private _toolbar: ToolbarService,
    private _title: Title) {
    this.setSeoData();
  }

  async ngOnInit() {
    await this.setData();
  }

  ngAfterViewChecked() {
    (window as any).prerenderReady = true;
  }

  private async setData() {
    const accessToken = await this._facebookService.getAccessToken(environment.facebook.appId, environment.facebook.appSecret).toPromise();
    const photos = await this._facebookService.getPhotos(accessToken, environment.facebook.albumId).toPromise();

    const promises: Promise<Photo>[] = [];
    for (const photo of photos) {
      const p = this._facebookService.getImages(accessToken, photo.id).pipe(
        map(result => photo.images = result),
        mapTo(photo),
        tap(image => this.photos.push(image))
      ).toPromise();

      promises.push(p);
    }

    this.photos = await Promise.all(promises);
  }

  getImageUrl(photo: Photo, el: HTMLElement) {
    let images = photo.images;
    images = filter(images, i => i.width >= el.clientWidth - 16);
    images = orderBy(images, i => i.width);

    const image = first(images);
    if (!image) {
      return undefined;
    }

    return this._sanitizer.bypassSecurityTrustResourceUrl(image.source);
  }

  private setSeoData() {
    this._toolbar.title$.next('Bilder');
    this._title.setTitle('Bilder und Impresionen von modernem Nageldesign und Modellagen');
    this._meta.updateTag({ name: 'description', content: 'Aktuelle Bilder und Impressionen meiner Nagelmodellagen und anderer Arbeiten aus meinem Nagelstudio in Sulzbach (Taunus)' })
    this._meta.updateTag({ name: 'keywords', content: join(['nagelstudio', 'nageldesign', 'sulzbach', 'bilder', 'eindrücke', 'gallerie', 'impressionen'], ',') })
  }
}
