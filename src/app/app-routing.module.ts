import { NgModule } from '@angular/core';
import { ContactsComponent } from './features/contacts/contacts.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { UikitComponent } from './features/uikit/uikit.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'catalog', component: CatalogComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'uikit', component: UikitComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
