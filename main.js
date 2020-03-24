import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
import PacienteAsegurado from "./pacienteAsegurado.js";
import Doctor from "./doctor.js";
import Tiempo from "./tiempo.js";
import Cita from "./cita.js";
import Paciente from "./paciente.js";
import Hospital from "./hospital.js";

class Main{
    constructor(){
        let datosHospital = {
            nombre: "Hospital Karmaland",
            direccion: "Av Camino Real #789"
        }

        this._hospital = new Hospital (datosHospital);

        /*--------------DATOS PACIENTES--------------*/
        this._fecha = new Fecha(26,10,2000);

        /*--------------DATOS PACIENTES--------------*/

        let datosPacienteAsegurado = {
            nombre: new Nombre("Raul", "Alvarez", "Genes"),
            fechaNacimiento: new Fecha(5,11,1988),
            telefono: 3125555555,
            numeroPoliza: 55555,
            fechaFinVigencia: new Fecha(20,4,2020),
            compañia: "Rubius Corp"
        };

        this._pacienteAsegurado1 = new PacienteAsegurado(datosPacienteAsegurado);

        this._pacienteAsegurado2 = new PacienteAsegurado({
            nombre: new Nombre("Kenia", "Villa", "De Rodriguez"),
            fechaNacimiento: new Fecha(31,12,2000),
            telefono: 3141618781,
            numeroPoliza: 99999,
            fechaFinVigencia: new Fecha(15,5,2025),
            compañia: "Kalvalan"
        });

        this._pacienteAsegurado3 = new PacienteAsegurado({
            nombre: new Nombre("Edson", "Govea", "De Jenni"),
            fechaNacimiento: new Fecha(22,1,2001),
            telefono: 3121135597,
            numeroPoliza: 55555,
            fechaFinVigencia: new Fecha(30,5,2020),
            compañia: "LaShidori"
        });

        /*--------------DATOS DOCTOR--------------*/

        let datosDoctor = {
            nombre: new Nombre("Jonathan", "Rodriguez", "De Villa"), 
            especialidad: "Ginecología", 
            telefono: 3121691160, 
            cedula: 2610
        };

        this._doctor1 = new Doctor(datosDoctor);

        this._doctor2 = new Doctor({
            nombre: new Nombre("Samuel", "De Luque", "Batuecas"), 
            especialidad: "Alergología", 
            telefono: 3127777777, 
            cedula: 777
        });

        this._doctor3 = new Doctor({
            nombre: new Nombre("Guillermo", "Diaz", "Del Toro"), 
            especialidad: "Traumatología", 
            telefono: 3121991888, 
            cedula: 888
        });

        /*--------------DATOS CITAS--------------*/

        let datosCita = {
            fecha: new Fecha(22,4,2020),
            hora: new Tiempo(10,15,"AM"),
            doctor: new Doctor(this._doctor1),
            paciente: new PacienteAsegurado(this._pacienteAsegurado2)
        };

        let datosCita2 = {
            fecha: new Fecha(30,3,2020),
            hora: new Tiempo(2,30,"PM"),
            doctor: new Doctor(this._doctor2),
            paciente: new PacienteAsegurado(this._pacienteAsegurado3)
        };

        let datosCita3 ={
            fecha: new Fecha(10,4,2020),
            hora: new Tiempo(3,45,"PM"),
            doctor: new Doctor(this._doctor3),
            paciente: new PacienteAsegurado(this._pacienteAsegurado1)
        };

        this._cita1 = new Cita(datosCita);
        this._cita2 = new Cita(datosCita2);
        this._cita3 = new Cita(datosCita3);

    }

    testHospital(){
        let hospital = this._hospital;

        /* ----------------PARTE DOCTORES---------------- */
        console.log(hospital.registrarDoctor(this._doctor1));
        console.log(hospital.registrarDoctor(this._doctor2));
        console.log(hospital.registrarDoctor(this._doctor3));

        console.log(hospital.listarDoctores());

        console.log(hospital.buscarDoctor(this._doctor1));
        console.log(hospital.buscarDoctor(this._doctor2));
        console.log(hospital.buscarDoctor(this._doctor3));

        console.log(hospital.buscarIndiceDoctor(this._doctor1));
        console.log(hospital.buscarIndiceDoctor(this._doctor2));
        console.log(hospital.buscarIndiceDoctor(this._doctor3));

        console.log(hospital.eliminarDoctor(this._doctor3));

        console.log(hospital.listarDoctores());

        console.log(hospital.actualizarDoctor(this._doctor2, this._doctor1));

        console.log(hospital.listarDoctores());

        /* ----------------Parte Cita---------------- */
        console.log(hospital.registrarCita(this._cita1));
        console.log(hospital.registrarCita(this._cita2));
        console.log(hospital.registrarCita(this._cita3));

        console.log(hospital.listarCitas());

        console.log(hospital.buscarCita(this._cita1));
        console.log(hospital.buscarCita(this._cita2));
        console.log(hospital.buscarCita(this._cita3));

        console.log(hospital.eliminarCita(this._cita3));

        console.log(hospital.listarCitas());

        console.log(hospital.actualizarCita(this._cita2, this._cita1));

        console.log(hospital.listarCitas());

    }

    testPacientesAsegurados(){
        console.log(this._pacienteAsegurado1.getPerfil());
        console.log(this._pacienteAsegurado2.getPerfil());
        console.log(this._pacienteAsegurado3.getPerfil());
    }

    testDoctores(){
        console.log(this._doctor1.getPerfil());
        console.log(this._doctor2.getPerfil());
        console.log(this._doctor3.getPerfil());
    }

    testCitas(){
        console.log(this._cita1.getPerfil());
        console.log(this._cita2.getPerfil());
        console.log(this._cita3.getPerfil());
    }

}
let app = new Main();
/*
app.testPacientesAsegurados();
app.testDoctores();
app.testCitas();
*/
app.testHospital();