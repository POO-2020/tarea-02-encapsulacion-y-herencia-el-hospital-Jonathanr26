import Cita from "./cita.js";
import Doctor from "./doctor.js";

export default class Hospital{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {string} direccion
     * @param {Doctor} doctores
     * @param {Cita} citas 
     */
    constructor(nombre, direccion){
        this._nombre = nombre;
        this._direccion = direccion;
        this._doctores = new Array();
        this._citas = new Array();
    }

    /**
     * Métodos Doctor
     */

    registrarDoctor(doctor){
        if(this.buscarDoctor(doctor) === undefined){
            this._doctores.push(doctor);
            return true;
        }
        return false;
    }
    
    buscarDoctor(doctor){
        let resultado = this._doctores.find(d => d.esIgualA(doctor));

        return resultado;
    }
    
    buscarIndiceDoctor(doctor){
        let indice = this._doctores.findIndex(d => d.esIgualA(doctor));

        return indice;
    }
    
    eliminarDoctor(doctor){
        let indice = this.buscarIndiceDoctor(doctor);
    
        if(indice < 0){
            return false;
        }
    
        this._doctores.splice(indice,1);
        
        return true;
    }
    
    actualizarDoctor(doctor, nuevoDoctor){
        let indice = this.buscarIndiceDoctor(doctor);
    
        if(indice < 0){
            return false;
        }
    
        this._doctores.splice(indice, 1, nuevoDoctor);
        
        return true;
    }
    
    listarDoctores(){
        this._doctores.forEach((doctor, i) => {
            console.log(`${i} ${doctor.getPerfil()}`);
        });
    }

    /**
     * Métodos Cita 
     */
    
    registrarCita(cita) {
        if(this.buscarCita(cita) === undefined){
            this._citas.push(cita);
            return true;
        }
        return false;
    }
    
    buscarCita(cita){
        let resultado = this._citas.find(c => c.esIgualA(cita));

        return resultado;
    }
    
    buscarIndiceCita(cita){
        let indice = this._citas.findIndex(c => c.esIgualA(cita));

        return indice;
    }
    
    eliminarCita(cita){
        let indice = this.buscarIndiceCita(cita);
    
        if(indice < 0){
            return false;
        }
    
        this._citas.splice(indice,1);
        
        return true;
    }
    
    actualizarCita(cita, nuevaCita){
        let indice = this.buscarIndiceCita(cita);
    
        if(indice < 0){
            return false;
        }
    
        this._citas.splice(indice, 1, nuevaCita);
        
        return true;
    }
    
    listarCitas(){
        this._citas.forEach((cita, i) => {
            console.log(`${i} ${cita.getPerfil()}`);
        });
    }
}