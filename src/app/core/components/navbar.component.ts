import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { AuthService } from '../../features/login/service/auth.service';

@Component({
  selector: 'ddg-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark text-white">
      <a class="navbar-brand">
        <ddg-logo></ddg-logo>
      </a>
      <div class="navbar-collapse collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="catalog">Catalog</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="uikit">UIKIT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="contacts">Contacts</a>
          </li>
        </ul>
      </div>
      
      {{username}}
    </nav>
  `
})
export class NavbarComponent {
  @Input() username: string;
}
