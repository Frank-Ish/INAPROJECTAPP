import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarDetalleComponent } from './modificar-detalle/modificar-detalle.component';
import { FacturaComponent } from './factura.component';
import { MaterialModule } from 'src/app/material.module';
import { FacturaRoutingModule } from './factura-routing.module';
import { MostrarClientesComponent } from './mostrar-clientes/mostrar-clientes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModificarDetalleComponent,
    FacturaComponent,
    MostrarClientesComponent
  ],
  imports: [
    CommonModule,
    FacturaRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class FacturaModule { }
