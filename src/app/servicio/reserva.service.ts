import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Reserva } from '../modelos/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  reservaURL = 'http://localhost:8080/reservas';

  private _refersh$ = new Subject<void>();
  
  constructor(private httpClient: HttpClient) { }

  get refresh$(){
    return this._refersh$;
  }

  getReserva():Observable<any>{
    return this.httpClient.get(this.reservaURL);
  }

  guardarReserva(reserva: Reserva):Observable<any>
  {
    return this.httpClient.post(this.reservaURL, reserva)
    .pipe(
      tap(()=>{
        this._refersh$.next(); 
      })
    );
  }

  //Obtener un huesped
  getUnaReserva(id:number):Observable<Reserva>{
    return this.httpClient.get<Reserva>(this.reservaURL+"/"+id);
  }

  editarReserva(id:number, reserva: Reserva):Observable<Reserva>
  {
    return this.httpClient.put<Reserva>(this.reservaURL+'/'+id, reserva);
  }

  deleteReserva(id:number):Observable<any>
  {
    return this.httpClient.delete(this.reservaURL+'/'+id);
  }
}
