class CalcController {
    constructor(){
        this._displaCalc = "0";
        this._dataAtual;
    }

    get displaCalc() {
        return this._displaCalc;
    }

    set displaCalc(valor) {
        this._displaCalc = valor;
    }

    get dataAtual() {
        return this._dataAtual;
    }

    set dataAtual(data) {
        this._dataAtual = data;
    }
}