export default class DetalleCelularPage {
    // Selectores
    constructor() {
        this.calculaCuotasLink = '#open-installments-modal';
        this.selectorBanco = '#bankSelector';
        this.selectorTarjeta = '#cardSelector';
        this.calcularCuotasButton = '#calculate_btn > .btn-primary';
        this.tablaCuotas = '#installmentsTable';
    }

    // Acceso a los selectores
    getCalculaCuotasLink(){
        return cy.get(this.calculaCuotasLink)
    }

    getSelectorBancos(){
        return cy.get(this.selectorBanco);
    }

    getSelectorBancoEspecifico(banco){
        return cy.get(this.selectorBanco).click({force: true}).contains(banco);
    }

    getSelectorTarjetas(){
        return cy.get(this.selectorTarjeta);
    }

    getSelectorTarjetaEspecifica(tarjeta){
        return cy.get(this.selectorTarjeta).click({force: true}).contains(tarjeta);
    }

    getCalcularCuotasButton(){
        return cy.get(this.calcularCuotasButton);
    }
    getTablaCuotas(){
        return cy.get(this.tablaCuotas);
    }
}

