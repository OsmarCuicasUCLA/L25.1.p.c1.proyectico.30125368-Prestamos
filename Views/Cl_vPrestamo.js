export default class Cl_vPrestamo {

    constructor(controlador) {

        this.vista = document.getElementById("prestamoForm");
        this.inCliente = document.getElementById("prestamoForm_inCliente");
        this.inCodigo = document.getElementById("prestamoForm_inCodigo");
        this.inPrestamo = document.getElementById("prestamoForm_inPrestamo");
        this.inMeses = document.getElementById("prestamoForm_inMeses");
        this.btnProcesar = document.getElementById("prestamoForm_btProcesar");

        this.btnProcesar.onclick = () => {
            controlador.agregarPrestamo({
                cliente: this.inCliente.value,
                codigo: this.inCodigo.value,
                prestamo: this.inPrestamo.value,
                meses: this.inMeses.value
            })
            this.inCliente.value = ""
            this.inCodigo.value = ""
            this.inPrestamo.value = ""
            this.inMeses.value = ""
        }
    }

    mostrar(){
        this.vista.hidden = false;
        this.vista.style.display = "flex";
    }

    ocultar(){
        this.vista.hidden = true;
        this.vista.style.display = "none";
    }
}