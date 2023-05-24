import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductosService } from '../../../shared/services/productos.service';
import { ProductosComponent } from '../../productos/productos.component';
import { Producto } from 'src/app/shared/models/producto';
import { ProductosForms } from '../../../shared/Utils/ProfileForms/productosProfile';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent {
  displayedColumns: string[] = ['idProducto', 'nombre', 'precioVenta', 'stock', 'acciones'];
  dataSource = new MatTableDataSource();

  constructor(private productoService: ProductosService, public productoForm: ProductosForms){

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

  cargarProducto(producto: Producto){
    this.productoService.cargarProducto(producto);
  }
}
