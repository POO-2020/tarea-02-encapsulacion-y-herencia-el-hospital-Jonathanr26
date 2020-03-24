import Nombre from "./nombre.js";

export default class Doctor {
    /**
     *
     * @param {Nombre} nombre
     * @param {string} especialidad
     * @param {number} telefono
     * @param {number} cedula
    */

    constructor({nombre, especialidad, telefono, cedula}) {
        this._nombre = nombre;
        this._especialidad = especialidad;
        this._telefono = telefono;
        this._cedula = cedula;
    }

    getCedula() {
        return this._cedula;
    }

    getApellidoPaternoDoc(){
        return this._nombre.getApellidoPaterno()
    }

    getNombre() {
        return this._nombre;
    }

    esIgualA(doctor) {
        if (doctor.getCedula() === this._cedula){
            return true;
        }
        
        return false;
    }

    getPerfil() {
        return `Cedula:${this._cedula}, 
Especialidad:${this._especialidad}, 
Nombre:${this._nombre.getNombreCompleto()}, 
Telefeno:${this._telefono}`;
  }
}