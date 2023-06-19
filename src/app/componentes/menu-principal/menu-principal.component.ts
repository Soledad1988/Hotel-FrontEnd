import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit{

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  constructor() { 
    
  }
  
  ngOnInit() {
  }

hora(){
  var today = new Date();
 
  // obtener la fecha de hoy en formato `MM/DD/YYYY`
  var now = today.toLocaleDateString('en-US');
  console.log(now);
}
}
