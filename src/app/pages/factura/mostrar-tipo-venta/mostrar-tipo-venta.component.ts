import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TipoVentaService } from '../../../shared/services/tipo-venta.service';
import { TipoVentaForms } from 'src/app/shared/Utils/ProfileForms/tipoVentaProfile';
import { TipoVenta } from 'src/app/shared/models/tipoVenta';

@Component({
  selector: 'app-mostrar-tipo-venta',
  templateUrl: './mostrar-tipo-venta.component.html',
  styleUrls: ['./mostrar-tipo-venta.component.css']
})
export class MostrarTipoVentaComponent {
  displayedColumns: string[] = ['idTipoVenta', 'nombre', 'acciones'];
  dataSource = new MatTableDataSource();

  constructor(private tipoVentaService: TipoVentaService, public tipoVentaForm: TipoVentaForms){

  }

  ngOnInit():void{
    this.cargarLista();
  }


  cargarLista(){
    //Llama al servicio a traves de clienteServ y llama al metodo getAll
    this.tipoVentaService.getAll().subscribe((datos)=>{
      //Pintamos la tabla de material
      this.dataSource.data = datos;
    }, (err)=>{
      console.log(err);
    });
  }

  cargarTipoVenta(tipoVenta: TipoVenta){
    this.tipoVentaService.cargarTipoVenta(tipoVenta);
  }
}
