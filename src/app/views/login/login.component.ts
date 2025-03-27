import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    politica: [true, [Validators.requiredTrue]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  get politica(): string {
    const errors = this.loginForm.get('politica')?.errors;
    // console.log(this.loginForm.controls['politica']);
    if (errors?.["required"]) {
      return "Para continuar debes aceptar la política de tratamiento de datos.";
    }
    return "";
  }
  loginDisplay = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.querySelector('.header');
    console.log('Header scroll');
    if (header) {
      if (window.pageYOffset > 0) {
        header.classList.add('small');
      } else {
        header.classList.remove('small');
      }
    }
  }


  validacion(campo: string) {
    return this.loginForm.get(campo)?.invalid
      && this.loginForm.get(campo)?.touched;
  }
  login() {
    console.log("click login");
    this.router.navigate(['/dashboard']);
  }
}
