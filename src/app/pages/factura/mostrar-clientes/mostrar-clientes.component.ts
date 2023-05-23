import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ClientesForms } from 'src/app/shared/Utils/ProfileForms/clientesProfile';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styleUrls: ['./mostrar-clientes.component.css']
})
export class MostrarClientesComponent {
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido1', 'apellido2', 'acciones'];
  dataSource = new MatTableDataSource();
  
  constructor(private clienteService: ClientesService, public clienteForm:ClientesForms, private dialog:MatDialog, private msg: ToastrService){

  }

  ngOnInit():void{
    this.cargarLista();
  }

  cargarLista(){
    //Llama al servicio a traves de clienteServ y llama al metodo getAll
    this.clienteService.getAll().subscribe((datos)=>{
      //Pintamos la tabla de material
      this.dataSource.data = datos;
    }, (err)=>{
      console.log(err);
    });
  }
  cargarCliente(cliente: Cliente) {
    this.clienteService.cargarCliente(cliente);
  }

}
