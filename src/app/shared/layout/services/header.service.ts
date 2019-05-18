import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  title$ = new BehaviorSubject<string>('Test');

  constructor() { }

  get title() {
    return this.title$.value;
  }

  set title(title: string) {
    this.title$.next(title);
  }
}
