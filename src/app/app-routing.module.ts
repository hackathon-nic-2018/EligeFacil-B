import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PerfilTiendaComponent } from './components/perfil-tienda/perfil-tienda.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  { path: 'search-bar', component: SearchBarComponent },
  { path: 'perfil-tienda', component: PerfilTiendaComponent },
  { path: 'tabs', component: TabsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
