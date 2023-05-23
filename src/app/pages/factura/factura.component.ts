import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { MostrarClientesComponent } from './mostrar-clientes/mostrar-clientes.component';
import { Cliente } from 'src/app/shared/models/cliente';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesForms } from 'src/app/shared/Utils/ProfileForms/clientesProfile';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido1', 'apellido2'];
  listaClientes = new MatTableDataSource();
  
  constructor(public clienteService: ClientesService, public clienteForm:ClientesForms, private dialog:MatDialog, private msg: ToastrService){

  }

  ngOnInit():void{
  
  }


  openModal(cliente?:Cliente):void {
    let dialogClie;

    dialogClie = this.dialog.open(MostrarClientesComponent, {
      height: '900px',
      width: '700px',
      data: {cliente}
    })
  }
}
