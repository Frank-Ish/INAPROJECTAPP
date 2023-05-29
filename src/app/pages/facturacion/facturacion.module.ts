import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturacionRoutingModule } from './facturacion-routing.module';
import { FacturacionComponent } from './facturacion.component';
import { AdminFacturaComponent } from './admin-factura/admin-factura.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FacturaModule } from '../factura/factura.module';


@NgModule({
  declarations: [
    FacturacionComponent,
    AdminFacturaComponent,
  ],
  imports: [
    CommonModule,
    FacturacionRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FacturaModule
  ]
})
export class FacturacionModule { }
