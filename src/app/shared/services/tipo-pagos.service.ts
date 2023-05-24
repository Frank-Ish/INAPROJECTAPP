import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoPago } from '../models/tipoPago';
import { environment } from 'src/environments/environments';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoPagosService {

  constructor(private http: HttpClient) { }

  getAll():Observable<TipoPago[]>{
    return this.http.get<TipoPago[]>(`${environment.API_URL}/tipoPago`).pipe(catchError(this.handlerError))
  }

  handlerError(error:any):Observable<never>{

    let errorMensaje = 'Error desconocido.'
    return throwError(errorMensaje);
  }

  tipoPagoSeleccionado: TipoPago ={
    idTipoPago: 0,
    nombre: '',
    estado: true,
  }

  cargarTipoPago(tipoPago: TipoPago){
    this.tipoPagoSeleccionado = tipoPago;
  }
}
