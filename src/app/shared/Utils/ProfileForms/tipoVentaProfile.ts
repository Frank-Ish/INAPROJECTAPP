import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({providedIn: 'root'})
export class TipoVentaForms {
    baseForm: FormGroup; 

    constructor(private fb: FormBuilder) { 
        this.baseForm = this.fb.group ({
            idTipoVenta: [0, [Validators.required]], 
            nombre: ['', [Validators.required]],
            estado: [true],
        });
    } 

    private getErrorMessage(field:string):void{

    }
}