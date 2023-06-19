import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/modelos/reserva';
import { ReservaService } from 'src/app/servicio/reserva.service';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.css']
})
export class EditarReservaComponent implements OnInit{

  codigo=null;
  reservaActual:Reserva=new Reserva();

  constructor(
    private reservaService:ReservaService,
    private antivatedRouter: ActivatedRoute,
    private router:Router
    ) { }

    ngOnInit(): void {
      this.getReserva();
    }

    getReserva():void{
      this.antivatedRouter.params.subscribe(
        e=>{
          let codigo=e['codigo'];
          if(codigo){
            this.reservaService.getUnaReserva(codigo).subscribe(
              res=>this.reservaActual=res
            );
          }
        }
      );
    }
  
    //metodo para implementar la logica del guardado
    guardar():void{
      console.log(this.reservaActual);
      this.reservaService.guardarReserva(this.reservaActual).subscribe(
        res=>this.router.navigate(['/busqueda'])
      );
    }
}
