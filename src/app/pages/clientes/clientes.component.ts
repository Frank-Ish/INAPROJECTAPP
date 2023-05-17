import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { ClientesAdminComponent } from './clientes-admin/clientes-admin.component';
import { Cliente } from '../../shared/models/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido1', 'apellido2', 'acciones'];
  dataSource = new MatTableDataSource();

  constructor(private clienteServ: ClientesService, private dialog:MatDialog){

  }

  ngOnInit():void{
    this.cargarLista();
  }

  cargarLista(){
        //Llama al servicio a traves de clienteServ y llama al metodo getAll
        this.clienteServ.getAll().subscribe((datos)=>{
          //Pintamos la tabla de material
          this.dataSource.data = datos;
        }, (err)=>{
          console.log(err);
        });
  }

  openModal(cliente?:Cliente):void {
    let dialogClie;
    if(!cliente){
      console.log("Nuebo");
      dialogClie = this.dialog.open(ClientesAdminComponent, {
        height: '900px',
        width: '700px'
      })
    }
    else {
      console.log("Modificar");
      dialogClie = this.dialog.open(ClientesAdminComponent, {
        height: '900px',
        width: '700px',
        data: {cliente}
      });
    }
    dialogClie.afterClosed().subscribe((result)=>{
      this.cargarLista();
    }, (err)=>{
      console.log(err);
    })
  }

  eliminar(cliente:Cliente){
    this.clienteServ.eliminar(cliente).subscribe((response) =>{
      this.cargarLista();
    },(err) =>{
      console.log(err);
    })
  }

  /**      if(this.clienteForm.baseForm.valid){
        this.clienteServ.guardar(this.clienteForm.baseForm.value).subscribe((resp) =>{
          this.msg.success('El cliente se guardo correctamente.');
        },(err)=>{
          this.msg.error(err);
        })
      } */
}