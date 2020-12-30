import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar.component';
import { HelloComponent } from './shared/components/hello.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { LoginComponent } from './features/login/login.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './core/components/logo.component';
import { AuthService } from './features/login/service/auth.service';
import { CatalogService } from './features/catalog/services/catalog.service';
import { CatalogStore } from './features/catalog/services/catalog.store';
import { PanelComponent } from './shared/components/panel.component';
import { TabbarComponent } from './shared/components/tabbar.component';
import { CatalogFormComponent } from './features/catalog/components/catalog-form.component';
import { CatalogListComponent } from './features/catalog/components/catalog-list.component';
import { IconComponent } from './features/catalog/components/icon.component';
import { UikitComponent } from './features/uikit/uikit.component';
import { MeteoComponent } from './shared/components/meteo.component';
import { GmapComponent } from './shared/components/map.component';

@NgModule({
  declarations: [
    AppComponent,
    // core
    NavbarComponent,
    LogoComponent,

    CatalogComponent,
    LoginComponent,
    ContactsComponent,

    // shared
    HelloComponent,
    TabbarComponent,
    PanelComponent,
    MeteoComponent,
    GmapComponent,

    IconComponent,
    CatalogFormComponent,
    CatalogListComponent,
    UikitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService, CatalogService,
    CatalogStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
