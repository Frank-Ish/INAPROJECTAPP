import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { MostrarClientesComponent } from '../factura/mostrar-clientes/mostrar-clientes.component';
import { Cliente } from 'src/app/shared/models/cliente';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesForms } from 'src/app/shared/Utils/ProfileForms/clientesProfile';
import { ProductosService } from 'src/app/shared/services/productos.service';
import { ProductosForms } from 'src/app/shared/Utils/ProfileForms/productosProfile';
import { MostrarProductoComponent } from '../factura/mostrar-producto/mostrar-producto.component';
import { TipoPagosService } from 'src/app/shared/services/tipo-pagos.service';
import { TipoPagoForms } from 'src/app/shared/Utils/ProfileForms/tipoPagoProfile';
import { MostrarTipoPagoComponent } from '../factura/mostrar-tipo-pago/mostrar-tipo-pago.component';
import { TipoPago } from 'src/app/shared/models/tipoPago';
import { MostrarTipoVentaComponent } from '../factura/mostrar-tipo-venta/mostrar-tipo-venta.component';
import { TipoVenta } from 'src/app/shared/models/tipoVenta';
import { TipoVentaService } from 'src/app/shared/services/tipo-venta.service';
import { TipoVentaForms } from 'src/app/shared/Utils/ProfileForms/tipoVentaProfile';
import { FacturasService } from 'src/app/shared/services/facturas.service';
import { Producto } from 'src/app/shared/models/producto';
import { FacturaForm} from 'src/app/shared/Utils/ProfileForms/facturaProfile';
import { FormArray, FormBuilder } from '@angular/forms';
import { Factura } from 'src/app/shared/models/factura';

@Component({
  selector: 'app-factura',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  //Costantes globales
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido1', 'apellido2'];
  dataClientes = new MatTableDataSource();
  total = 0;
  //cantidad = 0;
  descuento = 0;
  productosSeleccionados: Producto[] = [];
  facturaTipos: Factura = this.facturaForm.baseForm.value;

  //Constructor con todas las inyecciones.
  constructor(
    public facturaForm: FacturaForm, // Inyecta el servicio FacturaProfile, etc...
    public clienteService: ClientesService,
    public clienteForm: ClientesForms,
    public productoService: ProductosService,
    public productoForm: ProductosForms,
    public tipoPagoService: TipoPagosService,
    public tipoPagoForm: TipoPagoForms,
    public tipoVentaService: TipoVentaService,
    public tipoVentaForm: TipoVentaForms,
    public faturaService: FacturasService,
    private dialog: MatDialog,
    private msg: ToastrService,
    private fb: FormBuilder
  ) {}

  //Inicializador de mi programa
  ngOnInit(): void {
    if (localStorage.getItem('showSuccessMessage') === 'true') {
      this.msg.success('La factura fue registrada correctamente.');
      localStorage.removeItem('showSuccessMessage');
    }
  }

  get facturasForm() {
    return this.facturaForm.baseForm; // Accede al formulario a través del servicio FacturaProfile
  }

  //Modal de cliente
  openModal(cliente?: Cliente): void {
    const dialogClie = this.dialog.open(MostrarClientesComponent, {
      maxHeight: '900px',
      width: '700px'
    });
    dialogClie.afterClosed().subscribe(result => {
      if (result) {
        //Si la entidad recibida es diferente de null se cargan los datos,
        //usando la funcion patchValue
        this.clienteForm.baseForm.patchValue({
          cedula: result.cedula,
          nombre: result.nombre,
          apellido1: result.apellido1,
          apellido2: result.apellido2
        });
        //guardamos el id del cliente de manera global
        this.facturaTipos.idCliente = result.cedula;
        //guadamos el descuento del cliente de manera global
        this.descuento = result.descMax;
      }
    }, err => {
      this.msg.error(err);
    });
  }
  //Modal de productos
  openModal2(producto?: Producto): void {
    let dialogProd;
    dialogProd = this.dialog.open(MostrarProductoComponent, {
      maxHeight: '900px',
      maxWidth: '700px',
      data: {
        producto,
        productosSeleccionados:
          (this.facturasForm.get('tbDetalleFacturas') as FormArray).value
          //Por medio del metodo get, obtenemos los valores de nuestro tbDetalleFacturas
          //y los asignamos a productoSeleccionados.
      }
    });
    dialogProd.componentInstance.productoSeleccionado.subscribe((producto: Producto) => {
      // Obtenemos el formArray 'tbDetalleFacturas' del formulario
      const tbDetalleFacturas = this.facturaForm.baseForm.get('tbDetalleFacturas') as FormArray;
      
      // Creamos un nuevo FormGroup con los datos del elemento seleccionado
      const newFormGroup = this.fb.group({
        idProducto: [producto.idProducto],
        nombre: [producto.nombre],
        precio: [producto.precioVenta],
        cantidad: [1],
        stock: [producto.stock],
        estado: true
      });
      console.log(newFormGroup);
      // Agregamos el nuevo FormGroup al formArray 'tbDetalleFacturas'
      tbDetalleFacturas.push(newFormGroup);
    });
  }
  
  //Modal de tipo pago
  openModal3(tipoPago?: TipoPago): void {
    let dialogTipoPago;
    dialogTipoPago = this.dialog.open(MostrarTipoPagoComponent, {
      maxHeight: '500px',
      width: '400px',
      data: { tipoPago }
    });
    dialogTipoPago.afterClosed().subscribe(result =>{
      if(result){
        this.tipoPagoForm.baseForm.patchValue({
          idTipoPago: result.idTipoPago,
          nombre: result.nombre
        });
        //Guardamos el idTipoPago de manera global
        this.facturaTipos.tipoPago = result.idTipoPago;
      }
    }, err => {
      this.msg.error(err);
    });
  }

  //Modal de tipoVenta
  openModal4(tipoVenta?: TipoVenta): void {
    let dialogTipoVen;
    dialogTipoVen = this.dialog.open(MostrarTipoVentaComponent, {
      maxHeight: '500px',
      width: '400px',
      data: { tipoVenta }
    });
    dialogTipoVen.afterClosed().subscribe(result =>{
      if(result){
        this.tipoVentaForm.baseForm.patchValue({
          idTipoVenta: result.idTipoVenta,
          nombre: result.nombre
        });
        //Guardamos el idTipoVenta de manera global.
        this.facturaTipos.tipoVenta = result.idTipoVenta;
      }
    }, err => {
      this.msg.error(err);
    });
  }

  guardar() {
    //Obtenemos los valores de nuestro form factura
    const nuevaFactura: Factura = this.facturaForm.baseForm.value;

    //seteamos los valores guadados en cada modal nuestra nuevaFactura
    nuevaFactura.idCliente = this.facturaTipos.idCliente;
    nuevaFactura.tipoPago = this.facturaTipos.tipoPago;
    nuevaFactura.tipoVenta = this.facturaTipos.tipoVenta;
    console.log(nuevaFactura);
    this.faturaService.guardar(nuevaFactura).subscribe(
        (resp) => {
            /*guardamos el valor showSuccessMessage en nuestro localStorage para poder
            usarlo en el ngOnInit y mostrar el mensaje de exito despues de recargar la pagina*/
            localStorage.setItem('showSuccessMessage', 'true');
            this.actualizar();
        },
        (err) => {
            this.msg.error(err);
        }
    );
  }   

  eliminarProducto(index: number) {
    // Obtener el formArray 'tbDetalleFacturas' del formulario
    const tbDetalleFacturas = this.facturaForm.baseForm.get('tbDetalleFacturas') as FormArray;
    
    // Eliminar el FormGroup en el índice especificado
    tbDetalleFacturas.removeAt(index);
  }

  calcularSubTotal(): number {
    let subTotal = 0;
    const tbDetalleFacturas = this.facturaForm.baseForm.get('tbDetalleFacturas') as FormArray;
    tbDetalleFacturas.controls.forEach(control => {
      const precioVenta = control.get('precio')?.value;
      const stock = control.get('cantidad')?.value;
      subTotal += precioVenta * stock;
    });
    return subTotal;
  }
  
  calcularIVA(): number{
    const subTotal = this.calcularSubTotal();
    const porcentajeImpuestos = 0.13; // 13% de impuestos
    const impuestos = subTotal * porcentajeImpuestos;
    return impuestos;
  }

  calcularDescuentos(): number {
    const subTotal = this.calcularSubTotal();
    const porcentajeDescuento = (this.descuento/100);
    const descuentos = subTotal * porcentajeDescuento;
    return descuentos;
  }
  calcularTotal(): number{
    const subTotal = this.calcularSubTotal();
    const impuestos = this.calcularIVA();
    const descuentos = this.calcularDescuentos();
    const totalFinal = subTotal + impuestos - descuentos;
    return totalFinal;
  }

  limpiarCampos() {}

  actualizar() {
    setTimeout(() => {
      location.reload();
    }, 200);
  }
}
