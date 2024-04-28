export default class DetalleCelularPage {
    // Selectores
    constructor() {
        this.calculaCuotasLink = '#open-installments-modal';
        this.selectorBanco = '#bankSelector';
        this.selectorTarjeta = '#cardSelector';
    }

    // Acceso a los selectores
    getCalculaCuotasLink(){
        return cy.get(this.calculaCuotasLink)
    }

    getSelectorBancos(){
        return cy.get(this.selectorBanco);
    }

    getSelectorBancoEspecifico(banco){
        return cy.get(this.selectorBanco).click().contains(banco);
    }

    getSelectorTarjetas(){
        return cy.get(this.selectorTarjeta);
    }

    getSelectorTarjetaEspecifica(tarjeta){
        return cy.get(this.selectorTarjeta).click().contains(tarjeta);
    }
}