export default class TiendaMovistarHomePage {
    // Selectores
    constructor() {
        this.celularesLocator = '.product-item';
    }

    // Acceso a los selectores
    getCelularEspecifico(nombreCelular){
        return cy.get(this.celularesLocator).contains(nombreCelular)
    }
}