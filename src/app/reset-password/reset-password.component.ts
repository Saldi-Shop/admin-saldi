import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  ImagePath: string;

  constructor() {
    this.ImagePath = '../assets/img/logo-2.jpg'
  }
}
