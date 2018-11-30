import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GridComponent } from './components/grid/grid.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PerfilTiendaComponent } from './components/perfil-tienda/perfil-tienda.component';
import {LoginComponent} from './components/login/login.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ListComponentComponent } from './components/list-component/list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    GridComponent,
    PerfilTiendaComponent,
    TabsComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
