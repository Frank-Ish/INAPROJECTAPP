import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ClientesForms } from 'src/app/shared/Utils/ProfileForms/clientesProfile';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { catchError } from 'rxjs';
import { TipoCliente } from 'src/app/shared/models/tipoCliente';
import { TipoClientesForms } from 'src/app/shared/Utils/ProfileForms/tipoClientesProfile';
import { MatTableDataSource } from '@angular/material/table';
import { TipoCLienteService } from 'src/app/shared/services/tipo-cliente.service';


@Component({
  selector: 'app-clientes-admin',
  templateUrl: './clientes-admin.component.html',
  styleUrls: ['./clientes-admin.component.css']
})
export class ClientesAdminComponent {
  titulo:string = 'Crear Cliente.'
  dataSource: TipoCliente[];
  formDirective: any;
  
  constructor(@Inject(MAT_DIALOG_DATA) private cliente: {cliente: Cliente}, 
  public clienteForm:ClientesForms, 
  private clienteServ:ClientesService, 
  private msg: ToastrService,
  @Inject(MAT_DIALOG_DATA) private tipoCliente: {tipoCliente:TipoCliente},
  public tipoClientesForm:TipoClientesForms,
  private tipoClienteService:TipoCLienteService
  ){}

  ngOnInit(){
    this.cargarCombo()
    if(this.cliente){
      this.cargarForm();
      this.titulo = 'Modificar Cliente';
    }
    else{
      this.titulo = 'Crear Cliente';
      this.resetForm();
    } 
  }

  cargarForm(){
    let fechaNac = new Date(this.cliente.cliente.fechaNac);
    let fechaNacString = fechaNac.toISOString().substring(0, 10);
    this.clienteForm.baseForm.patchValue({
      cedula: this.cliente.cliente.cedula,
      tipoCliente: this.cliente.cliente.tipoCliente,
      descMax: this.cliente.cliente.descMax,
      foto: this.cliente.cliente.foto,
      estado: this.cliente.cliente.estado,
      nombre: this.cliente.cliente.nombre,
      apellido1: this.cliente.cliente.apellido1,
      apellido2: this.cliente.cliente.apellido2,
      fechaNac: fechaNacString,
      genero: this.cliente.cliente.genero
    });
  }

  cargarCombo(){
    //Llama al servicio a traves de clienteServ y llama al metodo getAll
    this.tipoClienteService.getAll().subscribe((datos)=>{
      //Pintamos la tabla de material
      this.dataSource = datos;
    }, (err)=>{
      this.msg.error(err);
    });
  }

  guardar(){
    if(!this.cliente){
      console.log(this.clienteForm.baseForm.value)
      if(this.clienteForm.baseForm.valid){
        console.log(this.clienteForm.baseForm.value)
        this.clienteServ.guardar(this.clienteForm.baseForm.value).subscribe(() =>{
          this.msg.success('El cliente se guardo correctamente.');
        },(err)=>{
          this.msg.error(err);
        })
      }
    }
    else{
      console.log(this.clienteForm.baseForm.valid)
      if(this.clienteForm.baseForm.valid){
        this.clienteServ.Modificar(this.clienteForm.baseForm.value).subscribe((resp) =>{
          this.msg.success('El cliente se actualizo correctamente.');
        },(err)=>{
          this.msg.error(err);
        })
      }
    }

  }

  resetForm(): void {
    this.clienteForm.baseForm.reset({
      cedula: '',
      tipoCliente: 1,
      descMax: '',
      foto: '',
      estado: true,
      nombre: '',
      apellido1: '',
      apellido2: '',
      fechaNac: '',
      genero: 1
    });
  }
}



  /*cargarCombo(){
    this.tipoClientesForm.baseForm.patchValue({
        id: this.tipoCliente.tipoCliente.id,
        nombre: this.tipoCliente.tipoCliente.nombre,
        estado: this.tipoCliente.tipoCliente.estado
    })*/