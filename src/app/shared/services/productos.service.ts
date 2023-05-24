import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable, catchError,throwError } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${environment.API_URL}/producto`).pipe(catchError(this.handlerError))
  }

  handlerError(error:any):Observable<never>{

    let errorMensaje = 'Error desconocido.'
    return throwError(errorMensaje);
  }

  productoSeleccionado: Producto = {
    idProducto: 0,
    nombre: '',
    precioVenta: 0,
    stock: 0
  }

  cargarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }
}
