import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoVenta } from '../models/tipoVenta';
import { environment } from 'src/environments/environments';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoVentaService {

  constructor(private http: HttpClient) { }

  
  getAll():Observable<TipoVenta[]>{
    return this.http.get<TipoVenta[]>(`${environment.API_URL}/tipoVenta`).pipe(catchError(this.handlerError))
  }

  handlerError(error:any):Observable<never>{

    let errorMensaje = 'Error desconocido.'
    return throwError(errorMensaje);
  }

  tipoVentaSeleccionada: TipoVenta ={
    idTipoVenta: 0,
    nombre: '',
    estado: true,
  }

  cargarTipoVenta(tipoVenta: TipoVenta){
    this.tipoVentaSeleccionada = tipoVenta;
  }

}