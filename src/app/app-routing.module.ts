import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GridComponent } from './components/grid/grid.component';
import { PerfilTiendaComponent } from './components/perfil-tienda/perfil-tienda.component';
import { LoginComponent } from './components/login/login.component';
import { TabsComponent } from './components/tabs/tabs.component';


const routes: Routes = [
  { path: 'search-bar', component: SearchBarComponent },
  { path: 'grid', component: GridComponent },
  { path: 'perfil-tienda', component: PerfilTiendaComponent },
  {path: 'login', component: LoginComponent},
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
