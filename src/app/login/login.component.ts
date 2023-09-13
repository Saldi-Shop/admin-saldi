import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ImagePath: string;

  constructor() {
    this.ImagePath = '../assets/img/logo-2.jpg'
  }
}
