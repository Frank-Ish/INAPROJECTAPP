import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { TipoCliente } from 'src/app/shared/models/tipoCliente';
import { TipoCLienteService } from 'src/app/shared/services/tipo-cliente.service';
import { AdminTipoClienteComponent } from './admin-tipo-cliente/admin-tipo-cliente.component';

@Component({
  selector: 'app-tipo-cliente',
  templateUrl: './tipo-cliente.component.html',
  styleUrls: ['./tipo-cliente.component.css']
})
export class TipoClienteComponent {
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];
  listTipoClientes = new MatTableDataSource();
  tipoClienteSelec: TipoCliente

  constructor(private tipoClienteService: TipoCLienteService, private dialog: MatDialog, private msg: ToastrService){

  }

  ngOnInit():void{
    this.cargarLista();
  }

  cargarLista(){
    //Llama al servicio a traves de clienteServ y llama al metodo getAll
    this.tipoClienteService.getAll().subscribe((datos)=>{
      //Pintamos la tabla de material
      this.listTipoClientes.data = datos;
    }, (err)=>{
      console.log(err);
    });
  }

  openModal(tipoCliente?:TipoCliente):void {
    let dialogClien;
    if(!tipoCliente){
      console.log("Nuevo");
      dialogClien = this.dialog.open(AdminTipoClienteComponent, {
        maxHeight: '900px',
        maxWidth: '700px'
      })
    }
    else {
      console.log("Modificar");
      dialogClien = this.dialog.open(AdminTipoClienteComponent, {
        maxHeight: '900px',
        maxWidth: '700px',
        data: {tipoCliente}
      });
    }
    dialogClien.afterClosed().subscribe((res)=>{
      this.tipoClienteSelec = res;
      this.cargarLista();
    }, (err)=>{
      this.msg.error(err);
    })
  }

  eliminar(tipoCliente:TipoCliente){
    this.tipoClienteService.eliminar(tipoCliente).subscribe((response) =>{
      this.msg.success('El cliente fue eliminado.');
      this.cargarLista();
    },(err) =>{
      this.msg.error(err);
    })
  }
}
