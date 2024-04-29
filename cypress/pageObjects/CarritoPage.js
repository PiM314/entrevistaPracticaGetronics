export default class CarritoPage {
    // Selectores
    constructor() {
        this.selectorColor = '.swatch-attribute-options > .swatch-option[data-option-label="verde"]';
        this.comprarButton = '#swatch_attribute_card';
        this.carritoButton = '.minicart-wrapper';
        this.validarColor = '.item-options';
        this.validarCelular = '#form-validate';
        this.validarPrecio = '.cart-price > .price';
        this.validarCantidad = '.item-info > .col.qty';
    }

    // Acceso a los selectores
    getColorVerde(){
        return cy.get(this.selectorColor).eq(0)
    }

    getComprarButton(){
        return cy.get(this.comprarButton)
    }

    getAbrirCarrito(){
        return cy.get(this.carritoButton)
    }

    getValidarColor(){
        return cy.get(this.validarColor)
    }

    getValidarCelular(){
        return cy.get(this.validarCelular)
    }

    getValidarPrecio(){
        return cy.get(this.validarPrecio)
    }

    getValidarCantidad(){
        return cy.get(this.validarCantidad)
    }

}

