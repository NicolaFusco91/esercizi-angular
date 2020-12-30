import { Component } from '@angular/core';
import { AuthService } from './features/login/service/auth.service';

@Component({
  selector: 'ddg-root',
  template: `
    <ddg-navbar 
      [username]="auth.username"
    ></ddg-navbar> 
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService) {}

}
