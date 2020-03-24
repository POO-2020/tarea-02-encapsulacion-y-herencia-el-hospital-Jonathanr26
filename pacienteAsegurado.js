import Fecha from "./fecha.js";
import Paciente from "./paciente.js";

export default class PacienteAsegurado extends Paciente{
    /**
     * 
     * @param {number} numeroPoliza 
     * @param {Fecha} fechaFinVigencia 
     * @param {string} compañia 
     */
    constructor({nombre, fechaNacimiento, telefono, numeroPoliza, fechaFinVigencia, compañia}){
        super(nombre, fechaNacimiento, telefono);
        this._numeroPoliza = numeroPoliza;
        this._fechaFinVigencia = fechaFinVigencia;
        this._compañia = compañia;
    }

    getPerfil(){
        return `Nombre: ${this._nombre.getNombreCompleto()},
Fecha de Nacimiento: ${this._fechaNacimiento.getFecha()},
Telefono: ${this._telefono},
Número de poliza: ${this._numeroPoliza},
Vigencia de la poliza: ${this._fechaFinVigencia.getFecha()},
Compañía aseguradora: ${this._compañia}`
    }
}