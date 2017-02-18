import { ApplicationState } from '../store/application-state';
import { Store } from '@ngrx/store';
import { Image } from '../models/image';
import { Photo } from '../models/photo';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FacebookService {

  constructor(
    private http: Http) { }

  private getHeaders(accessToken: string) {
    return new Headers({
      Authorization: `Bearer ${accessToken}`
    });
  }

  getAccessToken(appId: number, appSecret: string): Observable<string> {
    const url = `https://graph.facebook.com/v2.8/oauth/access_token?client_id=${appId}&client_secret=${appSecret}&grant_type=client_credentials`;
    return this.http.get(url)
      .map(value => value.json())
      .map(value => value.access_token);
  }

  getPhotos(accessToken: string, albumId: number): Observable<Photo[]> {
    if (!accessToken) {
      return Observable.of([]);
    }
    const url = `https://graph.facebook.com/v2.8/${albumId}/photos`;
    return this.http.get(url, { headers: this.getHeaders(accessToken) })
      .map(value => value.json())
      .map(value => value.data);
  }

  getImages(accessToken: string, photoId: number): Observable<Image[]> {
    const url = `https://graph.facebook.com/v2.8/${photoId}?fields=images`;
    return this.http.get(url, { headers: this.getHeaders(accessToken) })
      .map(value => value.json())
      .map(value => value.images);
  }
}
