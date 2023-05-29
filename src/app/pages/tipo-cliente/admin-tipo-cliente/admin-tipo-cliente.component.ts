import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TipoClientesForms } from 'src/app/shared/Utils/ProfileForms/tipoClientesProfile';
import { TipoCliente } from 'src/app/shared/models/tipoCliente';
import { TipoCLienteService } from 'src/app/shared/services/tipo-cliente.service';

@Component({
  selector: 'app-admin-tipo-cliente',
  templateUrl: './admin-tipo-cliente.component.html',
  styleUrls: ['./admin-tipo-cliente.component.css']
})
export class AdminTipoClienteComponent {
  titulo:string = 'Crear TipoCliente.';

    
  constructor(@Inject(MAT_DIALOG_DATA) private tipoCliente: {tipoCliente:TipoCliente}, public tipoClientesForm:TipoClientesForms, private tipoClienteService: TipoCLienteService,private msg: ToastrService
  ){}

  ngOnInit(){
    if(this.tipoCliente){
      this.cargarForm();
      this.titulo = 'Modificar Cliente.'
    }
    else{
      this.titulo = 'Crear Cliente.'
      this.tipoClientesForm.baseForm.reset();
    }
  }
  cargarForm(){
    this.tipoClientesForm.baseForm.patchValue({
      id: this.tipoCliente.tipoCliente.id,
      nombre: this.tipoCliente.tipoCliente.nombre
    });
  }

  guardar(){

    if(!this.tipoCliente){
      console.log(this.tipoClientesForm.baseForm.valid)
      if(this.tipoClientesForm.baseForm.valid){
        this.tipoClienteService.guardar(this.tipoClientesForm.baseForm.value).subscribe((resp) =>{
          this.msg.success('El cliente se guardo correctamente.');
          this.tipoClientesForm.baseForm.reset;
        },(err)=>{
          this.msg.error(err);
        })
      }
    }
    else{
      console.log(this.tipoClientesForm.baseForm.valid)
      if(this.tipoClientesForm.baseForm.valid){
        this.tipoClienteService.modificar(this.tipoClientesForm.baseForm.value).subscribe((resp) =>{
          this.msg.success('El cliente se actualizo correctamente.');
        },(err)=>{
          this.msg.error(err);
        })
      }
    }

  }

}
