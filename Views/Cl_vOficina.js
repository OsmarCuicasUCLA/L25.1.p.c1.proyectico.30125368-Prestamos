export default class Cl_vOficina {

    constructor(controller){
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("registrosPrestamos");

        this.inMontoFinal = document.getElementById("mainForm_MontoFinal");
        this.inCant2Meses = document.getElementById("mainForm_Clientes2Meses");
        this.inClienteMenor = document.getElementById("mainForm_MenorPrestamo");
    }


    mostrarReporte(){
        this.vista.style.display = "flex";
    }

    ocultarReporte(){
        this.vista.style.display = "none";
    }

    mostrarTabla(){
        this.tabla.style.display = 'flex'
    }

    ocultarTabla(){
        this.tabla.style.display = 'none'
    }

    agregarPrestamoTabla({ cliente, codigo, prestamo, meses }){
        document.getElementById("prestamosTabla").innerHTML += `
        <tr>
            <td>${cliente}</td>
            <td>${codigo}</td>
            <td>${prestamo}</td>
            <td>${meses}</td>
        </tr>`;
    }

    reporteOficina({ montoFinal, cant2Meses, clienteMenor }){
        this.inMontoFinal.value = montoFinal;
        this.inCant2Meses.value = cant2Meses;
        this.inClienteMenor.value = clienteMenor;
    }
}