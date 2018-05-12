import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Image } from '../models/image';
import { Photo } from '../models/photo';

@Injectable()
export class FacebookService {

  constructor(
    private httpClient: HttpClient) { }

  private getHeaders(accessToken: string) {
    return new HttpHeaders({
      Authorization: `Bearer ${accessToken}`
    });
  }

  getAccessToken(appId: number, appSecret: string): Observable<string> {
    const url = `https://graph.facebook.com/v2.8/oauth/access_token?client_id=${appId}&client_secret=${appSecret}&grant_type=client_credentials`;
    return this.httpClient.get<any>(url).pipe(
      map(value => value.access_token)
    );
  }

  getPhotos(accessToken: string, albumId: number): Observable<Photo[]> {
    if (!accessToken) {
      return of([]);
    }
    const url = `https://graph.facebook.com/v2.8/${albumId}/photos`;
    return this.httpClient.get<any>(url, { headers: this.getHeaders(accessToken) }).pipe(
      map(value => value.data)
    );
  }

  getImages(accessToken: string, photoId: number): Observable<Image[]> {
    const url = `https://graph.facebook.com/v2.8/${photoId}?fields=images`;
    return this.httpClient.get<any>(url, { headers: this.getHeaders(accessToken) }).pipe(
      map(value => value.images)
    );
  }
}
