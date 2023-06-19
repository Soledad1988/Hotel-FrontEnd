import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Reserva } from 'src/app/modelos/reserva';
import { ReservaService } from 'src/app/servicio/reserva.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-reserva',
  templateUrl: './edit-reserva.component.html',
  styleUrls: ['./edit-reserva.component.css']
})
export class EditReservaComponent implements OnInit{

  title='Reserva Actualizada';

  opciones:String[] = ["EFECTIVO", "DEBITO", "CRÉDITO", "TRANSFERENCIA"]
 
  id=null;
  reservaActual:Reserva=new Reserva();
  suscription: Subscription = new Subscription();

  constructor(
    private reservaService:ReservaService,
    private antivatedRouter: ActivatedRoute,
    private router:Router
    ) { }

    ngOnInit(): void {
      this.getReserva();

      this.suscription = this.reservaService.refresh$.subscribe(()=>{
        this.getReserva();
      })
     
    }

    getReserva():void{
      this.antivatedRouter.params.subscribe(
        e=>{
          let id=e['id'];
          if(id){
            this.reservaService.getUnaReserva(id).subscribe(
              res=> this.reservaActual=res
            );
          }
        }
      );
    }
  
    guardar():void{
      console.log(this.reservaActual);
      this.reservaService.guardarReserva(this.reservaActual).subscribe(
        res=>{

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su reserva han sido actualizada correctamente',
            showConfirmButton: false,
            timer: 4500
          });
        
          this.router.navigate(['/busqueda'])
        });
     }
      
}
