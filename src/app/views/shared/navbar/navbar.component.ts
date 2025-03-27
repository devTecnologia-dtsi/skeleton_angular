import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { appData } from '../../../environments/environment';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  foto: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/institucional/cargando.gif');
  perfil: boolean = false;
  private UrlFotografia: string = appData.URLApiFotografia;

  constructor(private sanitizer: DomSanitizer) {
  }
  cerrarSesion() {
    throw new Error('Method not implemented.');
  }
  cambiarFoto() {
    let cn = localStorage.getItem("cn") ?? appData.cn;
    let correo = localStorage.getItem("correo") ?? appData.correo;
    window.open(this.UrlFotografia + 'uploads/' + cn + '?correo=' + correo, '_blank');
  }
  abrirPerfil(event: Event) {
    event.stopPropagation(); // Evita que el click cierre inmediatamente el menú
    this.perfil = !this.perfil;
  }
  cerrarPerfil() {
    this.perfil = false;
  }
  // Escuchar clicks fuera del botón de perfil
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('#user-menu-button');
    if (!clickedInside) {
      this.perfil = false;
    }
  }

}
