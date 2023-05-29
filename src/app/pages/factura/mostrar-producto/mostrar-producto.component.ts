import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductosService } from '../../../shared/services/productos.service';
import { ProductosComponent } from '../../productos/productos.component';
import { Producto } from 'src/app/shared/models/producto';
import { ProductosForms } from '../../../shared/Utils/ProfileForms/productosProfile';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent {
  displayedColumns: string[] = ['idProducto', 'nombre', 'precioVenta', 'stock', 'acciones'];
  dataSource = new MatTableDataSource();
  @Output() productoSeleccionado = new EventEmitter<Producto>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productoService: ProductosService, public productoForm: ProductosForms){

  }

  ngOnInit():void{
    this.cargarLista();
  }

  cargarLista(){
    //Llama al servicio a traves de clienteServ y llama al metodo getAll
    this.productoService.getAll().subscribe((datos)=>{
      //Pintamos la tabla de material
      this.dataSource.data = datos;
    }, (err)=>{
      console.log(err);
    });
  }

 

agregarProducto(producto: Producto) {
  this.productoSeleccionado.emit(producto);
}

  /*agregarProducto(producto: Producto) {
    this.data.productosSeleccionados.push(producto);
  }*/

  /*cargarProducto(producto: Producto){
    this.productoService.cargarProducto(producto);
  }*/
}
