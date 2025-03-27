import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appData } from '../../../environments/environment';

@Component({
  selector: 'app-responsive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './responsive.component.html',
  styles: ``
})
export class ResponsiveComponent {
  public env: any = appData;
  constructor() { 
    if (!this.env.production) {
      console.log('Modo desarrollo: ', this.env.displayName, '@despitiadev');
    }
  }
}
