import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FacturaForm {
  baseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      idCliente: ['', Validators.required],
      tipoVenta: ['', Validators.required],
      tipoPago: ['', Validators.required],
      fecha: [new Date()],
      estado: [true],
      tbDetalleFacturas: this.fb.array([])
    });
  }

  get tbDetalleFacturas() {
    return this.baseForm.get('tbDetalleFacturas') as FormArray;
  }

  agregarDetalleFactura() {
    const detalleFactura = this.fb.group({
      idProducto: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      precio: ['', [Validators.required, Validators.min(0)]],
      estado: [true]
    });
    this.tbDetalleFacturas.push(detalleFactura);
  }
}
