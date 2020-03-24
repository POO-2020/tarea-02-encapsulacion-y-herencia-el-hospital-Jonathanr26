import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Fecha} fechaNacimiento 
     * @param {number} telefono 
     */
    constructor({nombre, fechaNacimiento, telefono}){
        this._nombre = nombre;
        this._fechaNacimiento = fechaNacimiento;
        this._telefono = telefono;
    }

    getNombre() {
        return this._nombre;
    }

    getPerfil(){
        return `Nombre: ${this._nombre.getNombreCompleto()}, 
Fecha de nacimiento: ${this._fechaNacimiento.getFecha()}, 
Telefono: ${this._telefono}`
    }
}