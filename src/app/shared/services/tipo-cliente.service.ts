import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoCliente } from '../models/tipoCliente';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TipoCLienteService {

    //En el contructuro se recibe una instancia de una dependencia o inyeccion de dependencia.
    constructor(private http: HttpClient) { }

    getAll():Observable<TipoCliente[]>{
      return this.http.get<TipoCliente[]>(`${environment.API_URL}/tipoCliente`).pipe(catchError(this.handlerError))
    }
  //Metodo para capturar los errores
  //Descompone el error para devolver al controlador el mensaje puro
  handlerError(error:any):Observable<never>{

    let errorMensaje = 'Error desconocido.'
    return throwError(errorMensaje);
  }

  guardar(tipoCliente:TipoCliente):Observable<TipoCliente>{
    return this.http.post<TipoCliente>(`${environment.API_URL}/tipoCliente`,tipoCliente).pipe(catchError(this.handlerError));
  }

  modificar(tipoCliente:TipoCliente):Observable<TipoCliente>{
    return this.http.patch<TipoCliente>(`${environment.API_URL}/tipoCliente/${tipoCliente.id}`, tipoCliente).pipe(catchError(this.handlerError));
  }

  eliminar(tipoCliente:TipoCliente):Observable<TipoCliente>{
    const url = `${environment.API_URL}/tipoCliente/${tipoCliente.id}`;
    console.log(url);
    return this.http.delete<TipoCliente>(`${environment.API_URL}/tipoCliente/${tipoCliente.id}`).pipe(catchError(this.handlerError));
    }
}
