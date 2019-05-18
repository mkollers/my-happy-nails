import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { HeaderService } from '../../services/header.service';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output('app-toggle') toggle = new EventEmitter<void>();
  title$: Observable<string>;

  constructor(headerService: HeaderService) {
    this.title$ = headerService.title$;
  }

}
