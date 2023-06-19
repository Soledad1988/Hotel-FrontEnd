import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, pipe, tap } from 'rxjs';
import { Huesped } from '../modelos/huesped';

@Injectable({
  providedIn: 'root'
})
export class HuespedService {

  huespedURL = 'http://localhost:8080/huespedes';
 
  private _refersh$ = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  get refresh$(){
    return this._refersh$;
  }
  
  getHuesped():Observable<any>{
    return this.httpClient.get(this.huespedURL);
  }

  guardarHuesped(huesped: Huesped):Observable<any>
  {
    return this.httpClient.post(this.huespedURL, huesped)
    .pipe(
      tap(()=>{
        this._refersh$.next(); 
      })
    )
  }

  //Obtener un huesped
  getUnHuesped(id:number):Observable<Huesped>{
    return this.httpClient.get<Huesped>(this.huespedURL+"/"+id);
  }

  editarHuesped(id:number, huesped: Huesped):Observable<Huesped>
  {
    return this.httpClient.put<Huesped>(this.huespedURL+'/'+id, huesped);
  }

  deleteHuesped(id:number):Observable<any>
  {
    return this.httpClient.delete(this.huespedURL+'/'+id);
  }

}
