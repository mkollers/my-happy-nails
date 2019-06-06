import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnDestroy {
  private _subs = [];
  mode: 'over' | 'push' | 'side' = 'side';
  opened = false;

  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    breakpointObserver: BreakpointObserver,
    router: Router
  ) {
    // subscribe event which will be triggered every time, the screen-size switches between small and large
    this._subs.push(
      breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
        map(state => state.matches),
        distinctUntilChanged(),
        tap(isSmall => this._screenSizeChanged(isSmall))
      ).subscribe()
    );

    this._subs.push(
      router.events.pipe(
        filter(e => e instanceof NavigationEnd), // only on routing
        filter(() => this.mode === 'over'), // only on smalls screens
        tap(() => this.sidenav.close()),
        tap(() => _changeDetectorRef.markForCheck())
      ).subscribe()
    );
  }

  ngOnDestroy = () => this._subs.forEach(sub => sub.unsubscribe());

  toggle() {
    this.sidenav.toggle();
    this._changeDetectorRef.markForCheck();
  }

  private _screenSizeChanged(isSmall: boolean) {
    if (isSmall) {
      this.opened = false;
      this.mode = 'over';
    } else {
      this.opened = true;
      this.mode = 'side';
    }
    this._changeDetectorRef.markForCheck();
  }
}
