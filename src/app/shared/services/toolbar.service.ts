import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ToolbarService {
  title$ = new BehaviorSubject('Home');

  constructor() { }

}
