import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Message } from './message';

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  sendMail(message: Message) {
    const baseUrl = 'https://hooks.zapier.com/hooks/catch/2205841/9nkw13';
    const url = `${baseUrl}?firstname=${message.firstname}&lastname=${message.lastname}&mail=${message.mail}&phone=${message.phone}&text=${message.text}`;
    return this.httpClient.get(url)
      .retry(2)
      .share();
  }

}
