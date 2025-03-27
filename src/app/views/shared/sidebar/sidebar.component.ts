import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MenuItem } from '../../../interfaces/menu.interface';
import { MenuService } from '../../../services/menu.service';
import { SvgIconComponent } from 'angular-svg-icon';
import { MenuSidebarComponent } from '../menu-sidebar/menu-sidebar.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, MenuSidebarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public verSideBar$: Observable<boolean> = new Observable<boolean>();
  public verMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();


  constructor(
    private menuService: MenuService
    // private responsiveService: menuResponsiveService
  ) {
    this.verSideBar$ = this.menuService.verSideBar$; // Visibilidad del sidebar, desde el servicio se inicializa en true @despitiadev
    // this.verMenu$ = this.menuService.getMenu();
  }
  cerrarSesion() {
    //Implentar la lógica del cierre... @despitia
  }
  public visibilidadSidebar() {
    this.menuService.visibilidadSidebar();
  }
}
