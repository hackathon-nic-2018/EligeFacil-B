import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PerfilTiendaComponent } from './components/perfil-tienda/perfil-tienda.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PerfilTiendaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
