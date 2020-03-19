import Fecha from "./fecha.js";

export default class PacienteAsegurado{
    /**
     * 
     * @param {number} numeroPoliza 
     * @param {Fecha} fechaFinVigencia 
     * @param {string} compañia 
     */
    constructor(numeroPoliza, fechaFinVigencia, compañia){
        this._numeroPoliza = numeroPoliza;
        this._fechaFinVigencia = fechaFinVigencia;
        this._compañia = compañia;
    }
}