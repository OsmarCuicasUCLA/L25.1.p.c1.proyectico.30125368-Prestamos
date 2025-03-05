export default class Cl_mPrestamo {

    constructor({cliente, codigo, prestamo, meses}){
        this.cliente = cliente;
        this.codigo = codigo;
        this.prestamo = prestamo;
        this.meses = meses
    }

    set cliente(e){
        this._cliente = e;
    }

    get cliente(){
        return this._cliente;
    }

    set codigo(e){
        this._codigo = e;
    }

    get codigo(){
        return this._codigo;
    }

    set prestamo(e){
        this._prestamo = +e;
    }

    get prestamo(){
        return this._prestamo;
    }

    set meses(e){
        this._meses = +e;
    }

    get meses(){
        return this._meses;
    }
}