export interface Cliente {
    //Este modelo es para mapear lo que me devuelve el api.

    cedula: string,
    tipoCliente: number,
    descMax: number,
    foto: string,
    estado: boolean,
    nombre: string,
    apellido1: string,
    apellido2: string,
    fechaNac: Date,
    genero: number
    
}