import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarDetalleComponent } from './modificar-detalle/modificar-detalle.component';
import { FacturaComponent } from './factura.component';
import { MaterialModule } from 'src/app/material.module';
import { FacturaRoutingModule } from './factura-routing.module';
import { MostrarClientesComponent } from './mostrar-clientes/mostrar-clientes.component';
import { FormsModule } from '@angular/forms';
import { MostrarProductoComponent } from './mostrar-producto/mostrar-producto.component';
import { MostrarTipoPagoComponent } from './mostrar-tipo-pago/mostrar-tipo-pago.component';
import { MostrarTipoVentaComponent } from './mostrar-tipo-venta/mostrar-tipo-venta.component';


@NgModule({
  declarations: [
    ModificarDetalleComponent,
    FacturaComponent,
    MostrarClientesComponent,
    MostrarProductoComponent,
    MostrarTipoPagoComponent,
    MostrarTipoVentaComponent
  ],
  imports: [
    CommonModule,
    FacturaRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    MostrarClientesComponent,
    MostrarProductoComponent,
    MostrarTipoPagoComponent,
    MostrarTipoVentaComponent
  ]
})
export class FacturaModule { }
