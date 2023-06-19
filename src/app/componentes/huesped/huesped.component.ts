import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Huesped } from 'src/app/modelos/huesped';
import { HuespedService } from 'src/app/servicio/huesped.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-huesped',
  templateUrl: './huesped.component.html',
  styleUrls: ['./huesped.component.css']
})
export class HuespedComponent implements OnInit{

  title='Huesped Registardo';

  nac:String[] = ["ARGENTINO", "BOLIVIANO","CHILENO" ,"COLOMBIANO","COSTARRICENSE","CUBANO",
  "DOMINICANO","ECUATORIANO","ESTADOUNIDENSE","GUATEMALTECO","HONDUREÑO","MEXICANO","NICARAGUENSE",
  "PANAMEÑO","PARAGUAYO","PUESTORRIQUEÑO","PERUANO", "SALVADOREÑO","URUAGUAYO","VENEZOLANO"]

  nuevoHuesped: Huesped = new Huesped();

  constructor(private huespedSercice:HuespedService, 
    private router:Router, 
    private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {

  }


  agregarHuesped(){
    this.huespedSercice.guardarHuesped(this.nuevoHuesped).subscribe(
      res=>{

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sus datos han sido registrdos correctamente',
          showConfirmButton: false,
          timer: 4500
        })
        console.log(res);
        this.router.navigate(['/menu']);
      },
      err=>console.log(err)
    );
  }

}
