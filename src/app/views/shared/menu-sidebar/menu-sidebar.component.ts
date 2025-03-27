import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../../../services/menu.service';
import { MenuItem } from '../../../interfaces/menu.interface';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-sidebar',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, RouterLink],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.css'
})
export class MenuSidebarComponent {
  public verSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public expanded: boolean = false;

  constructor(private menuService: MenuService) {
    this.verSideBar$ = this.menuService.verSideBar$; // Visibilidad del sidebar, desde el servicio se inicializa en true @despitiadev
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }
  visibilidadMenu2(item: MenuItem): void {
    this.expanded = !this.expanded;
    item.expanded = this.expanded;
  }

}
