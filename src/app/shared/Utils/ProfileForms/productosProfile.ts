import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ProductosForms {
    baseForm: FormGroup; 

    constructor(private fb: FormBuilder) { 
        this.baseForm = this.fb.group ({
            idProducto: [1, [Validators.required]], 
            nombre: ['', [Validators.required]], 
            precioVenta: [1, [Validators.required]],
            stock: [1, [Validators.required]],
            cantidad: [1, [Validators.required]]   
        });
    } 

    private getErrorMessage(field:string):void{

    }
}