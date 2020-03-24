export default class Nombre{
    /**
     *
     * @param {string} nombre
     * @param {string} apellidoPaterno 
     * @param {string} apellidoMaterno 
     */
  
    constructor(nombre, apellidoPaterno, apellidoMaterno){
        this._nombre = nombre;
        this._apellidoPaterno = apellidoPaterno;
        this._apellidoMaterno = apellidoMaterno;
    }

    getNombreCompleto(){
        return `${this._nombre} ${this._apellidoPaterno} ${this._apellidoMaterno}`;
    }

    getApellidoNombre(){
        return `${this._apellidoPaterno} ${this._apellidoMaterno} ${this._nombre}`;
    }
    
    getIniciales(){
        return `${this._nombre[0]}${this._apellidoPaterno[0]}${this._apellidoMaterno[0]}`;
    }

    getApellidoPaterno(){
        return this._apellidoPaterno;
    }
}