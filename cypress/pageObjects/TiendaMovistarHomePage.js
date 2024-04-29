export default class TiendaMovistarHomePage {
    // Selectores
    constructor() {
        this.celularesLocator = 'ol > .product-item';
        this.filtroButton = '.filters';
        this.cantidadEquiposText = '.total-products > p';
    }

    // Acceso a los selectores
    getCelularEspecifico(nombreCelular){
        return cy.get(this.celularesLocator).contains(nombreCelular)
    }

    getFiltrarButton(){
        return cy.get(this.filtroButton)
    }

    getCelularPorIndice(indice){
        return cy.get(this.celularesLocator).eq(indice)
    }

    getCelulares(){
        return cy.get(this.celularesLocator)
    }

    getCantidadEquiposText(){
        return cy.get(this.cantidadEquiposText)
    }
}