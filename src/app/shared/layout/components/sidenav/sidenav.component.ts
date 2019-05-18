import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnDestroy {
  private _subs = new SubSink();
  mode: 'over' | 'push' | 'side' = 'side';
  opened = true;

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    breakpointObserver: BreakpointObserver,
    router: Router
  ) {
    // subscribe event which will be triggered every time, the screen-size switches between small and large
    this._subs.add(
      breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
        map(state => state.matches),
        distinctUntilChanged(),
        tap(isSmall => this._screenSizeChanged(isSmall))
      ).subscribe()
    );

    this._subs.add(
      router.events.pipe(
        filter(e => e instanceof NavigationEnd), // only on routing
        filter(e => this.mode === 'over'), // only on smalls screens
        tap(() => this.sidenav.close()),
        tap(() => _changeDetectorRef.markForCheck())
      ).subscribe()
    );
  }

  ngOnDestroy = () => this._subs.unsubscribe();

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
