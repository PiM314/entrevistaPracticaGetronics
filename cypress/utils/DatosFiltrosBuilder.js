export default class DatosFiltrosBuilder {
    constructor() { }

    build() {
        return this;
    }

    PrecioDeUnoADosMillones(){
	    this.filtroPrecio = "1000000_2000000";
	    return this;
    }
    
    Memoria256GB(){
        this.filtroMemoria = "256GB";
        return this;
    }
}