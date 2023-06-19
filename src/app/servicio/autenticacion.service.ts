import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUsuario } from '../modelos/loginUsuario';
import { Observable } from 'rxjs/internal/Observable';
import { JwtDto } from '../modelos/JwtDto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionServiceService {

  authURL = 'http://localhost:8080/login';

  constructor(private httpClient: HttpClient) { }

  public login (login: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', login);
  }
}
