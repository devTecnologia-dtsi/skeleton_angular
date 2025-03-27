import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponsiveComponent } from "./views/shared/responsive/responsive.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResponsiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uWalletWeb';
}
