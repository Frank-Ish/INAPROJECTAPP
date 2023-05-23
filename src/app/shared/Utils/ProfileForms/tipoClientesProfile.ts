import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({providedIn: 'root'})
export class TipoClientesForms {
    baseForm: FormGroup; 

    constructor(private fb: FormBuilder) { 
        this.baseForm = this.fb.group ({
            id: [0, [Validators.required]], 
            nombre: ['', [Validators.required]],
            estado: [true],
        });
    } 



    /*isValidField(field:string):boolean{
        this.getErrorMessage(field);
        return((this.baseForm.get(field)?.touched || this.baseForm.get(field)?.dirty) && !this.baseForm.get(field)?.valid)
    }*/

    private getErrorMessage(field:string):void{

    }
}