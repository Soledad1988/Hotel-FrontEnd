import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/modelos/reserva';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from 'src/app/servicio/reserva.service';
import Swal from 'sweetalert2';
import { ValorServiceService } from 'src/app/servicio/valor-service.service';

@Component({
  selector: 'app-registrar-reserva',
  templateUrl: './registrar-reserva.component.html',
  styleUrls: ['./registrar-reserva.component.css']
})

export class RegistrarReservaComponent implements OnInit {

  title='Nueva Reserva';
  opciones:String[] = ["EFECTIVO", "DEBITO", "CRÉDITO", "TRANSFERENCIA"]
  
  nuevaReserva: Reserva = new Reserva();
  
  constructor(private reservaSercice:ReservaService, 
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private cargarScript:ValorServiceService){
      cargarScript.cargar(['valor'])
    }
  
  ngOnInit(): void {
   
  }
  
  agregarReserva(){
    console.log(this.nuevaReserva);
    this.reservaSercice.guardarReserva(this.nuevaReserva).subscribe(reserva=>{
      Swal.fire(this.title,`Reserva creado con exito`, 'success')
      this.router.navigate(['/huesped']);
    },
      err=>console.log(err)
    );

  }
  
  

}


