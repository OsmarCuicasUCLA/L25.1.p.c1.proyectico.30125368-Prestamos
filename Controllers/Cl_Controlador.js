import Cl_mOficina from "../Models/Cl_mOficina.js";
import Cl_mPrestamo from "../Models/Cl_mPrestamo.js";
import Cl_vPrestamo from "../Views/Cl_vPrestamo.js";
import Cl_vOficina from "../Views/Cl_vOficina.js";

export default class Cl_Controlador {
    constructor(){
        this.vPrestamo = new Cl_vPrestamo(this);
        this.vOficina = new Cl_vOficina(this);
        this.mOficina = new Cl_mOficina();

        this.btnMostrarForm = document.getElementById("btnMostrarForm");
        this.btnMostrarReporte = document.getElementById("btnMostrarReporte");
        this.btnMostrarTabla = document.getElementById("btnMostrarTabla");

        this.btnMostrarForm.onclick = () => {
            this.mostrarFormulario();
        }

        this.btnMostrarReporte.onclick = () => {
            this.mostrarReporte();
        }

        this.btnMostrarTabla.onclick = () => {
            this.mostrarTabla();
        }
    }

    agregarPrestamo({ cliente, codigo, prestamo, meses }){
        let xPrestamo = new Cl_mPrestamo({ cliente:cliente, codigo:codigo, prestamo:prestamo, meses:meses })
        this.mOficina.procesarPrestamo(xPrestamo);
        this.vOficina.agregarPrestamoTabla({ cliente: cliente, codigo: codigo, prestamo: prestamo, meses: meses });
        this.vOficina.reporteOficina({ montoFinal: this.mOficina.montoFinal(), cant2Meses: this.mOficina.cantClientes2Meses(), clienteMenor: this.mOficina.clienteMenorPrestamo()});
        alert("Agregado")
    }

    mostrarFormulario(){
        this.vPrestamo.mostrar();
        this.vOficina.ocultarReporte();
        this.vOficina.ocultarTabla();
    }

    mostrarReporte(){
        this.vPrestamo.ocultar();
        this.vOficina.mostrarReporte();
        this.vOficina.ocultarTabla();
    }

    mostrarTabla(){
        this.vPrestamo.ocultar();
        this.vOficina.ocultarReporte();
        this.vOficina.mostrarTabla();
    }
}