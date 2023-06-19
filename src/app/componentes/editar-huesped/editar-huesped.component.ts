import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Huesped } from 'src/app/modelos/huesped';
import { HuespedService } from 'src/app/servicio/huesped.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-huesped',
  templateUrl: './editar-huesped.component.html',
  styleUrls: ['./editar-huesped.component.css']
})
export class EditarHuespedComponent implements OnInit{

  title='Huesped Actualizado';

  nac:String[] = ["ARGENTINO", "BOLIVIANO","CHILENO" ,"COLOMBIANO","COSTARRICENSE","CUBANO",
  "DOMINICANO","ECUATORIANO","ESTADOUNIDENSE","GUATEMALTECO","HONDUREÑO","MEXICANO","NICARAGUENSE",
  "PANAMEÑO","PARAGUAYO","PUESTORRIQUEÑO","PERUANO", "SALVADOREÑO","URUAGUAYO","VENEZOLANO"];
  id=null;
  huespedActual:Huesped=new Huesped();
  suscription: Subscription = new Subscription();

  constructor(
    private huespedService:HuespedService,
    private antivatedRouter: ActivatedRoute,
    private router:Router
    ) { }

    ngOnInit(): void {
      this.getHuesped();

      this.suscription = this.huespedService.refresh$.subscribe(()=>{
        this.getHuesped();
      })
    }

    
    getHuesped():void{
    this.antivatedRouter.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.huespedService.getUnHuesped(id).subscribe(
            res=>this.huespedActual=res
          );
        }
      }
    );
  }

  //metodo para implementar la logica del guardado
  guardar():void{
    console.log(this.huespedActual);
    this.huespedService.guardarHuesped(this.huespedActual).subscribe(
      res=>{

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sus datos han sido actualizados correctamente',
        showConfirmButton: false,
        timer: 4500
      });

      this.router.navigate(['/Bhuesped'])
    });
  }  
  
}
