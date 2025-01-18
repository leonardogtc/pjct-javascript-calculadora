class CalcController {
    constructor(){
        this._displayCalc = "0";
        this.currentDate;
        this.inicialize();
    }

    inicialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "0"
        dateEl.innerHTML = "18/01/2025"
        timeEl.innerHTML = "00:00"

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        this._displayCalc = valor;
    }

    get dataAtual() {
        return this.currentDate;
    }

    set dataAtual(data) {
        this.currentDate = data;
    }
}