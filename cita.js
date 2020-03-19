import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Paciente from "./paciente.js";

export default class Cita {
    /**
     *
     * @param {Fecha} fecha
     * @param {Tiempo} hora
     * @param {Doctor} doctor
     * @param {Paciente} paciente
    */

    constructor(fecha, hora, doctor, paciente) {
        this._fecha = fecha;
        this._hora = hora;
        this._doctor = doctor;
        this._paciente = paciente;
    }
    
    getFecha() {
        return this._fecha;
    }

    getHora() {
        return this._hora;
    }
    
    getDoctor() {
        return this._doctor;
    }
    
    esIgualA(cita) {
        if (cita.getHora() === this._hora &&
            cita.getDoctor() === this._doctor &&
            cita.getFecha() === this._fecha) {
            return true;
        }
        
            return false;
    }

    getPerfil() {
        return `${this._fecha.getFecha()},
${this._hora.getFormato24()}, 
Dr.${this._doctor.getNombre().apellidoPaterno}, 
${this._paciente.getNombre().getNombreCompleto()}`;
    }
}