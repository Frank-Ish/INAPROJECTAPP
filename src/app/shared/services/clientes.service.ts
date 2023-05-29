import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  //En el contructuro se recibe una instancia de una dependencia o inyeccion de dependencia.
  constructor(private http: HttpClient) { }

  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${environment.API_URL}/cliente`).pipe(catchError(this.handlerError))
  }

  //Metodo para capturar los errores
  //Descompone el error para devolver al controlador el mensaje puro
  handlerError(error:any):Observable<never>{
    let errorMensaje = 'Error desconocido.'
    console.log(error);
    return throwError(errorMensaje);
  }

  guardar(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(`${environment.API_URL}/cliente`,cliente).pipe(catchError(this.handlerError));
  }

  Modificar(cliente:Cliente):Observable<Cliente>{
  return this.http.patch<Cliente>(`${environment.API_URL}/cliente/${cliente.cedula}`,cliente).pipe(catchError(this.handlerError));
  }

  eliminar(cliente:Cliente):Observable<Cliente>{
    const url = `${environment.API_URL}/cliente/${cliente.cedula}`;
    console.log(url);
    return this.http.delete<Cliente>(`${environment.API_URL}/cliente/${cliente.cedula}`).pipe(catchError(this.handlerError));
    }

    clienteSeleccionado: Cliente = {
      cedula: '',
      tipoCliente: 0,
      descMax: 0,
      foto: '',
      estado: true,
      nombre: '',
      apellido1: '',
      apellido2: '',
      fechaNac: new Date(),
      genero: 0
    };
  
    cargarCliente(cliente: Cliente) {
      this.clienteSeleccionado = cliente;
    }
}
