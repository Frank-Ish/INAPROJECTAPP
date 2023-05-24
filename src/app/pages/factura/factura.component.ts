import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { MostrarClientesComponent } from './mostrar-clientes/mostrar-clientes.component';
import { Cliente } from 'src/app/shared/models/cliente';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesForms } from 'src/app/shared/Utils/ProfileForms/clientesProfile';
import { ProductosService } from 'src/app/shared/services/productos.service';
import { ProductosForms } from 'src/app/shared/Utils/ProfileForms/productosProfile';
import { MostrarProductoComponent } from './mostrar-producto/mostrar-producto.component';
import { TipoPagosService } from 'src/app/shared/services/tipo-pagos.service';
import { TipoPagoForms } from 'src/app/shared/Utils/ProfileForms/tipoPagoProfile';
import { MostrarTipoPagoComponent } from './mostrar-tipo-pago/mostrar-tipo-pago.component';
import { TipoPago } from 'src/app/shared/models/tipoPago';
import { MostrarTipoVentaComponent } from './mostrar-tipo-venta/mostrar-tipo-venta.component';
import { TipoVenta } from 'src/app/shared/models/tipoVenta';
import { TipoVentaService } from 'src/app/shared/services/tipo-venta.service';
import { TipoVentaForms } from 'src/app/shared/Utils/ProfileForms/tipoVentaProfile';
import { Factura } from 'src/app/shared/models/factura';
import { FacturasService } from 'src/app/shared/services/facturas.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido1', 'apellido2'];
  listaClientes = new MatTableDataSource();
  total = 0;
  
  constructor(public clienteService: ClientesService, public clienteForm:ClientesForms,public productoService: ProductosService, public productoForm: ProductosForms, public tipoPagoService: TipoPagosService, public tipoPagoForm: TipoPagoForms, public tipoVentaService: TipoVentaService, public tipoVentaForm: TipoVentaForms, public faturaService: FacturasService, private dialog:MatDialog, private msg: ToastrService){

  }

  ngOnInit():void{
    this.calcularTotal();
  }


  openModal(cliente?:Cliente):void {
    let dialogClie;

    dialogClie = this.dialog.open(MostrarClientesComponent, {
      height: '900px',
      width: '700px',
      data: {cliente}
    })
  }

  openModal2(cliente?:Cliente):void {
    let dialogClie;

    dialogClie = this.dialog.open(MostrarProductoComponent, {
      height: '900px',
      width: '700px',
      data: {cliente}
    })
  }

  openModal3(tipoPago?:TipoPago):void {
    let dialogClie;

    dialogClie = this.dialog.open(MostrarTipoPagoComponent, {
      height: '500px',
      width: '400px',
      data: {tipoPago}
    })
  }

  openModal4(tipoVenta?:TipoVenta):void {
    let dialogClie;

    dialogClie = this.dialog.open(MostrarTipoVentaComponent, {
      height: '500px',
      width: '400px',
      data: {tipoVenta}
    })
  }

  guardar() {
    
    const nuevaFactura: Factura = {
      idCliente: this.clienteService.clienteSeleccionado.cedula,
      tipoVenta: this.tipoVentaService.tipoVentaSeleccionada.idTipoVenta,
      tipoPago: this.tipoPagoService.tipoPagoSeleccionado.idTipoPago,
      fecha: new Date(), 
      estado: true,
      tbDetalleFacturas: [
        {
          idProducto: this.productoService.productoSeleccionado.idProducto,
          cantidad: this.productoService.productoSeleccionado.stock,
          precio: (this.productoService.productoSeleccionado.precioVenta * this.productoService.productoSeleccionado.stock * (1 + 0.13)), 
          estado: true
        }
      ]
    };
    
    console.log(nuevaFactura);
    this.faturaService.guardar(nuevaFactura).subscribe((resp)=>{
      this.msg.success('La factura fue registrada correctamente.');
      },
      (err) => {
        this.msg.error(err);
      }
    );
  }
  
  calcularTotal() {
    const cantidad = this.productoService.productoSeleccionado.stock;
    const precio = this.productoService.productoSeleccionado.precioVenta;
    const iva = 0.13;
    this.total = cantidad * precio * (1 + iva);
  }
}
