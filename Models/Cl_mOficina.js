export default class Cl_mOficina {

    constructor(montoCaja = 20000, porcComisionMensual = 5){
        this.montoCaja = montoCaja;
        this.porcComisionMensual = porcComisionMensual;
        this.cont2Meses = 0;
        this.menorPrestamo = 999999*99999999;
        this.menorPrestamoName = null;
    }

    procesarPrestamo(prestamo){
        this.montoCaja -= prestamo.prestamo;

        if (prestamo.meses == 2)
            this.cont2Meses++;

        if (prestamo.prestamo < this.menorPrestamo){
            this.menorPrestamo = prestamo.prestamo;
            this.menorPrestamoName = prestamo.cliente;
        }

    }

    montoFinal(){
        return this.montoCaja;
    }

    cantClientes2Meses(){
        return this.cont2Meses;
    }

    clienteMenorPrestamo(){
        return this.menorPrestamoName;
    }
}