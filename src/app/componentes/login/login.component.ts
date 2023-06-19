import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
   
  isLogged = false;
  
  constructor( private tokenService:TokenServiceService,
    private router:Router){}

  ngOnInit(): void {
     
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }


   }

   onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  //coloque al final
  login(){
    this.router.navigate(['/menu'])
  }
   
}