import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ToolbarService {
  title$ = new BehaviorSubject('Home');

  constructor() { }

}
