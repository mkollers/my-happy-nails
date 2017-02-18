import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FacebookService {

  constructor(private http: Http) { }

  getAccessToken(appId: number, appSecret: string): Observable<string> {
    const url = `https://graph.facebook.com/v2.8/oauth/access_token?client_id=${appId}&client_secret=${appSecret}&grant_type=client_credentials`;
    return this.http.get(url)
      .do(x => console.log(x))
      .map(value => value.json())
      .do(x => console.log(x))
      .map(value => value.access_token);
  }
}
