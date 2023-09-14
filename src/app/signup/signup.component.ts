import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  ImagePath: string;
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  mensajes = {
    email: '',
    pass: '',
    confirmPass: '',
    privacy:''
  }
  constructor() {
    this.ImagePath = '../assets/img/logo-2.jpg'
  }
  onSubmit() {
if (this.user.email && this.user.password && this.user.confirmPassword) {
      // Realiza la lógica de inicio de sesión aquí
      console.log('Correo Electrónico:', this.user.email);
      console.log('Contraseña:', this.user.password);
      console.log(this.user.confirmPassword);
    } else {
      console.log('Por favor, complete todos los campos.');
      this.mensajes.email='Please enter a valid email address.',
      this.mensajes.pass='Your password is invalid. Please try again.',
      this.mensajes.confirmPass='Password does not match the confirm password.',
      this.mensajes.privacy='Please accept our Privacy Policy.'
    }
  }
}

