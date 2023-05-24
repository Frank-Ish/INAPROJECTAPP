export interface Factura {
    idCliente: string;
    tipoVenta: number;
    tipoPago: number;
    fecha: Date;
    estado: true;
    tbDetalleFacturas: {

      idProducto: number;
      cantidad: number;
      precio: number;
      estado: true;
    }[];
  }