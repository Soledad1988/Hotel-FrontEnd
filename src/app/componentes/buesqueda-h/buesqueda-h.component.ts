import { Component, OnInit } from '@angular/core';
import { HuespedService } from 'src/app/servicio/huesped.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-buesqueda-h',
  templateUrl: './buesqueda-h.component.html',
  styleUrls: ['./buesqueda-h.component.css']
})
export class BuesquedaHComponent implements OnInit{

  title='Huesped Eliminado';

  lista:any=[];
  constructor(private huespedService: HuespedService){}
 
  ngOnInit(): void {
    this.listarHuespedes();
  }

  listarHuespedes()
  {
    this.huespedService.getHuesped().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:number){
    this.huespedService.deleteHuesped(id).subscribe(
      res=>{this.ngOnInit()
        Swal.fire(this.title,`El huesped n° ${id} ha sido eliminado`, 'success')
        ;},
      err=>console.log(err)
    );
  }
}
