export default class FiltrosPage {
    constructor(){
        this.precioCelulares = '[data-code="price"] > li[data-value="VALORAMODIFICAR"]';
        this.memoriaInterna = '[data-code="movistar_internalmemory"]';
    }

    getFilterByPrecio(precio){  
        this.precioCelulares = this.precioCelulares.replace('VALORAMODIFICAR', precio)      
        return cy.get(this.precioCelulares)
    }

    getFilterByMemoria(gigas){
        return cy.get(this.memoriaInterna).contains(gigas)
    }
}
