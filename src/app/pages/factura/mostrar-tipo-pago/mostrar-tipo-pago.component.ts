import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TipoPagoForms } from 'src/app/shared/Utils/ProfileForms/tipoPagoProfile';
import { TipoPago } from 'src/app/shared/models/tipoPago';
import { TipoPagosService } from 'src/app/shared/services/tipo-pagos.service';

@Component({
  selector: 'app-mostrar-tipo-pago',
  templateUrl: './mostrar-tipo-pago.component.html',
  styleUrls: ['./mostrar-tipo-pago.component.css']
})
export class MostrarTipoPagoComponent {
  displayedColumns: string[] = ['idTipoPago', 'nombre', 'acciones'];
  dataSource = new MatTableDataSource();

  constructor(private tipoPagoService: TipoPagosService, public tipoPagoForm: TipoPagoForms){

  }

  ngOnInit():void{
    this.cargarLista();
  }

  cargarLista(){
    //Llama al servicio a traves de clienteServ y llama al metodo getAll
    this.tipoPagoService.getAll().subscribe((datos)=>{
      //Pintamos la tabla de material
      this.dataSource.data = datos;
    }, (err)=>{
      console.log(err);
    });
  }

  cargarTipoPago(tipoPago: TipoPago){
    this.tipoPagoService.cargarTipoPago(tipoPago);
  }
}
