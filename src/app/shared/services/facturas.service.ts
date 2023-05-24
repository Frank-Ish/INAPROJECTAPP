import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import { environment } from 'src/environments/environments';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Factura[]>{
    return this.http.get<Factura[]>(`${environment.API_URL}/factura`).pipe(catchError(this.handlerError))
  }

  handlerError(error:any):Observable<never>{

    let errorMensaje = 'Error desconocido.'
    return throwError(errorMensaje);
  }


  guardar(factura: Factura):Observable<Factura>{
    return this.http.post<Factura>(`${environment.API_URL}/factura`,factura).pipe(catchError(this.handlerError));
  }

}
