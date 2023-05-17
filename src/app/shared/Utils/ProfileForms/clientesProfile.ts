import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ClientesForms {
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



    /*isValidField(field:string):boolean{
        this.getErrorMessage(field);
        return((this.baseForm.get(field)?.touched || this.baseForm.get(field)?.dirty) && !this.baseForm.get(field)?.valid)
    }*/

    private getErrorMessage(field:string):void{

    }
}