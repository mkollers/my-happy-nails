import { Component, HostBinding, OnInit, AfterViewChecked } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { filter, first, join, orderBy } from 'lodash';
import { map, mapTo } from 'rxjs/operators';

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
    private facebookService: FacebookService,
    private media: ObservableMedia,
    private metaService: Meta,
    private sanitizer: DomSanitizer,
    private toolbarService: ToolbarService,
    private titleService: Title) {
    this.setSeoData();
  }

  async ngOnInit() {
    await this.setData();
  }

  ngAfterViewChecked() {
    (window as any).prerenderReady = true;
  }

  private async setData() {
    const accessToken = await this.facebookService.getAccessToken(environment.facebook.appId, environment.facebook.appSecret).toPromise();
    const photos = await this.facebookService.getPhotos(accessToken, environment.facebook.albumId).toPromise();

    for (const photo of photos) {
      const image = await this.facebookService.getImages(accessToken, photo.id).pipe(
        map(result => photo.images = result),
        mapTo(photo)
      ).toPromise();

      this.photos.push(image);
    }
  }

  getImageUrl(photo: Photo, el: HTMLElement) {
    let images = photo.images;
    images = filter(images, i => i.width >= el.clientWidth - 16);
    images = orderBy(images, i => i.width);

    const image = first(images);
    if (!image) {
      return undefined;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(image.source);
  }

  private setSeoData() {
    this.toolbarService.title$.next('Bilder');
    this.titleService.setTitle('Bilder und Impresionen von modernem Nageldesign und Modellagen');
    this.metaService.updateTag({ name: 'description', content: 'Aktuelle Bilder und Impressionen meiner Nagelmodellagen und anderer Arbeiten aus meinem Nagelstudio in Sulzbach (Taunus)' })
    this.metaService.updateTag({ name: 'keywords', content: join(['nagelstudio', 'nageldesign', 'sulzbach', 'bilder', 'eindrücke', 'gallerie', 'impressionen'], ',') })
  }
}
