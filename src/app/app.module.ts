import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PerfilTiendaComponent } from './components/perfil-tienda/perfil-tienda.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ListComponentComponent } from './components/list-component/list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PerfilTiendaComponent,
    TabsComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
