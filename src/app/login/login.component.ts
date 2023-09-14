import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ImagePath: string;
  user = {
    email: '',
    password: ''
  };

  constructor() {
    this.ImagePath = '../assets/img/logo-2.jpg'
  }
  onSubmit() {
    console.log(this.user.email);
    console.log(this.user.password);
    if (this.user.email && this.user.password) {
      // Realiza la lógica de inicio de sesión aquí
      console.log('Correo Electrónico:', this.user.email);
      console.log('Contraseña:', this.user.password);
    } else {
      console.log('Por favor, complete todos los campos.');
    }
    //this.newPass= this.encryptPassword(this.password);
    //this.isLoading = true;
    /*
    this.authService.login(this.username, this.newPass)
    .subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.userDataService.setUserData(response);
        // Almacenar los datos del usuario en el localStorage
        //localStorage.setItem('userData', JSON.stringify(response));
        sessionStorage.setItem('user', JSON.stringify(response));
        console.log(sessionStorage)
        this.router.navigate(['/dashboard']);
      },
      error: (error: { status: number; }) => {
        if (error.status === 401) {
          console.log('Credenciales inválidas');
          this.mensaje='Usuario o Contraseña Incorrecto';
        } else {
          console.error(error);
        }
        this.isLoading = false;
      }
    });*/
  }
}
