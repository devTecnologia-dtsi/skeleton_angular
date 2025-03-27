import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MenuItem } from '../interfaces/menu.interface';
import { Menu } from '../components/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _verSidebar$ = new BehaviorSubject<boolean>(true);
  public _pagesMenu$ = new BehaviorSubject<MenuItem[]>([]);

  constructor(
    private breakpoint: BreakpointObserver
  ) {
    // Detección de tamaño de pantalla para mostrar u ocultar el sidebar
    this.breakpoint.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this._verSidebar$.next(!result.matches); // Si es pequeño (celular), false. Si es grande, true.
    });
    this._pagesMenu$.next(Menu.pages);
  }
  public visibilidadSidebar() {
    this._verSidebar$.next(!this._verSidebar$.value);
  }
  public setSidebarVisibility(visible: boolean) {
    this._verSidebar$.next(visible);
  }
  get verSideBar$() {
    return this._verSidebar$.asObservable();
  }
  get pagesMenu$() {
    return this._pagesMenu$.asObservable();
  }
}
