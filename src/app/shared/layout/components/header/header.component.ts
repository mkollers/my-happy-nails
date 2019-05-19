import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { HeaderService } from '../../services/header.service';
import { Observable } from 'rxjs';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output('app-toggle') toggle = new EventEmitter<void>();
  title$: Observable<string>;

  constructor(headerService: HeaderService) {
    this.title$ = headerService.title$;
  }

}
