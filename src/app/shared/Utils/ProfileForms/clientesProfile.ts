import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ClientesForms {
    patchValue(arg0: { idCliente: any; nombre: any; apellido1: any; apellido2: any; }) {
      throw new Error('Method not implemented.');
    }
    baseForm: FormGroup; 

    constructor(private fb: FormBuilder) { 
        this.baseForm = this.fb.group ({
            cedula: ['', [Validators.required, Validators.maxLength(12)]], 
            tipoCliente: [1, [Validators.required]], 
            descMax: ['', [Validators.required]], 
            foto: [''], 
            estado: [true],
            nombre: ['', [Validators.required]], 
            apellido1: ['', [Validators.required]], 
            apellido2: ['', [Validators.required]], 
            fechaNac: ['', [Validators.required, ]], 
            genero: [1, [Validators.required, Validators.min(1), Validators.max(3)]], 
        });
    } 

    private getErrorMessage(field:string):void{

    }

    reset(): void {
        this.baseForm.reset({
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