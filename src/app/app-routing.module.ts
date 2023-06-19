import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarReservaComponent } from './componentes/registrar-reserva/registrar-reserva.component';
import { HuespedComponent } from './componentes/huesped/huesped.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BuesquedaHComponent } from './componentes/buesqueda-h/buesqueda-h.component';
import { EditarHuespedComponent } from './componentes/editar-huesped/editar-huesped.component';
import { EditReservaComponent } from './componentes/edit-reserva/edit-reserva.component';

const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'},

  {path:'login', component:LoginComponent},
  {path:'menu', component:MenuPrincipalComponent},
  {path:'busqueda', component:BusquedaComponent},
  {path:'editar/:id', component:EditReservaComponent},
  {path:'Bhuesped', component:BuesquedaHComponent},
  {path:'editarH/:id', component:EditarHuespedComponent},
  {path:'reserva', component:RegistrarReservaComponent},
  {path:'huesped', component:HuespedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
