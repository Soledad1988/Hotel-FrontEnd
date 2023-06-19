import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importa script
import { ValorServiceService } from './servicio/valor-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarReservaComponent } from './componentes/registrar-reserva/registrar-reserva.component';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './componentes/login/login.component';
import { HuespedComponent } from './componentes/huesped/huesped.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BuesquedaHComponent } from './componentes/buesqueda-h/buesqueda-h.component';
import { EditarHuespedComponent } from './componentes/editar-huesped/editar-huesped.component';
import { EditReservaComponent } from './componentes/edit-reserva/edit-reserva.component';

import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarReservaComponent,
    LoginComponent,
    HuespedComponent,
    MenuPrincipalComponent,
    BusquedaComponent,
    BuesquedaHComponent,
    EditarHuespedComponent,
    EditReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ValorServiceService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
