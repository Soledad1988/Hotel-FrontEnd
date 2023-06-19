import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicio/reserva.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})


export class BusquedaComponent implements OnInit {

  lista:any=[];

  title='Reserva Eliminada';
  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.listarReservas();


  }

  listarReservas(): void
  {
    this.reservaService.getReserva().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:number)
  {
    this.reservaService.deleteReserva(id).subscribe(
      res=>{this.ngOnInit()
        Swal.fire(this.title,`La Reserva n° ${id} ha sido eliminado`, 'success')
        ;},
      err=>console.log(err)
    );
  }


}
