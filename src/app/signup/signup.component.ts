import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  ImagePath: string;

  constructor() {
    this.ImagePath = '../assets/img/logo-2.jpg'
  }
}

