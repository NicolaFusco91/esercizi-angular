import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ddg-login',
  template: `
    <button (click)="signin()">login</button>
  `
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  signin() {
    this.auth.login('Mario', '123')
      .subscribe(res => {
        this.auth.username = res.username
        this.router.navigateByUrl('catalog')
      });
  }
}
