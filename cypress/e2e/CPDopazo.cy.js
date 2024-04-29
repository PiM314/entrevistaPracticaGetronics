import DatosTiendaBuilder from "../utils/DatosTiendaBuilder";
import DatosFiltrosBuilder from "../utils/DatosFiltrosBuilder";

import TiendaMovistarHomePage from "../pageObjects/TiendaMovistarHomePage";
import DetalleCelularPage from "../pageObjects/DetalleCelularPage";
import FiltrosPage from "../pageObjects/FiltrosPage";
import CarritoPage from "../pageObjects/CarritoPage";

describe('Casos de Prueba Cypress-Entrevista Práctica-Dopazo,Pilar', ()=>{
  // Vi en https://docs.cypress.io/api/commands/intercept#Disabling-logs-for-a-request que evita que aparezca en el runner la carga de distintos logs
  before(() => {
    cy.intercept({ resourceType: /xhr|fetch/} , { log: false })
  })
	beforeEach(()=>{
		cy.visit('https://tiendaonline.movistar.com.ar', {timeout: 120000});
	})
  
  /* 
    CP001: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tiendaonline.movistar.com.ar), luego realizar la búsqueda del equipo A14 e ingresar al mismo y verificar que se pueda pagar en 3 cuotas sin interes
    Resultado esperado:
      - Que se pueda ingresar a la página indicada
      - Que el equipo seleccionado sea el A14
      - Que se indique en el equipo que puede ser pagado en 3 cuotas sin interes

    De no estar disponible el equipo A14 tomar alguno que si lo esté.
  */
	it('CP001 - Validar cuotas en compra de equipo -Cuotas.3 -Equipo.A14', ()=>{
    // Se observa que en la web se muestra la lupa de busqueda, pero se esconde inmediatamente
    // Se avanza con la automatizacion sin realizar la busqueda
    const datosBuilder = new DatosTiendaBuilder().equipoCP001().build();
    const tiendaMovistarPage = new TiendaMovistarHomePage();
    const detalleCelularPage = new DetalleCelularPage();

    cy.viewport('macbook-16');

    tiendaMovistarPage.getCelularEspecifico(datosBuilder.equipo)
      .should('include.text', '279.999')
      .and('include.text', '6 cuotas sin interés') //Se observa que dice 6 cuotas en lugar de 3 cuotas 
      .and('include.text', 'Samsung')
      .click();

    //Para buscar que sean 3 cuotas, entro al banco
    detalleCelularPage.getCalculaCuotasLink().click();
    detalleCelularPage.getSelectorBancoEspecifico('American Express').click({force: true});
    detalleCelularPage.getSelectorTarjetaEspecifica('American Express').click({force: true});
    detalleCelularPage.getCalcularCuotasButton().click();
    cy.wait(8000);
    detalleCelularPage.getTablaCuotas()
      .should('include.text','3 cuotas sin interés');//Valido 3 cuotas
	})

  /*CP002: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tiendaonline.movistar.com.ar), luego utilizando los filtros de la página, filtrar por Memoria Interna 128GB y precio entre “$200.000 - $300.000” e indicar cuantos equipos devuelve la búsqueda
  Resultado esperado:
  - Que se pueda ingresar a la página indicada
  - Que se pueda aplicar los filtros
  - Que se obtengan equipos luego del filtrado validando la cantidad mostrada*/
    
	it('CP002-Aplicar filtro de equipos -Memoria Interna.256GB -Precio Entre 1My2M', ()=>{
    // Se observa que los filtros ahora se mueven de a millones. Se procede con el CP usando 1M a 2M
    // Adicionalmente, se modifica el filtro a 256GB por misma condicion anterior
    const datosFiltrosBuilder = new DatosFiltrosBuilder().PrecioDeUnoADosMillones().Memoria256GB().build();
    const filtrosPage = new FiltrosPage();
    const tiendaMovistarPage = new TiendaMovistarHomePage();

    //cy.viewport('macbook-16');
    
    tiendaMovistarPage.getFiltrarButton().click();
    filtrosPage.getFilterByPrecio(datosFiltrosBuilder.filtroPrecio).click()
    tiendaMovistarPage.getFiltrarButton().click();
    filtrosPage.getFilterByMemoria(datosFiltrosBuilder.filtroMemoria).click()
    tiendaMovistarPage.getCantidadEquiposText().should('include.text', 'Mostrando 1 equipos') //Validamos resultados de los filtros
    tiendaMovistarPage.getFiltrarButton().should('include.text', '( 2 )') //Validamos que se hayan aplicado 2 filtros 
    tiendaMovistarPage.getCelulares().should('have.length', 1); //Validamos que se devuelva 1 equipo
  })

 /* CP003: El objetivo del caso de prueba es visitar la tienda de Movistar 
  (https://tiendaonline.movistar.com.ar), 
  luego ingresar al tercer equipo de la lista inicial que se obtenga y 
  verificar que NO exista el método de pago de 60 cuotas para el banco Credicoop con Tarjeta VISA. 
      Resultado esperado: 
          - Que se pueda ingresar a la página indicada 
          - Que el equipo seleccionado sea el tercero de la lista 
          - Que no exista un medio de pago con 60 cuotas para el banco Credicoop con tarjeta VISA */


  it('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', ()=>{
    const detalleCelularPage = new DetalleCelularPage();
    const tiendaMovistarPage = new TiendaMovistarHomePage();

    cy.viewport('macbook-16');

    tiendaMovistarPage.getCelularPorIndice(2).click()
    detalleCelularPage.getCalculaCuotasLink().click();
    detalleCelularPage.getSelectorBancoEspecifico('Credicoop').click({force: true});
    detalleCelularPage.getSelectorTarjetaEspecifica('Visa').click({force: true});
    detalleCelularPage.getCalcularCuotasButton().click();
    cy.wait(8000);
    detalleCelularPage.getTablaCuotas()
      .should('not.include.text', '60 cuotas sin interés');//Valido que no se puede comprar en 60 cuotas
  })
    
/*CP004: El objetivo del caso de prueba es agregar un equipo al carrito con un color específico,
 validar que esté el producto en el carro de compras.
  Resultado esperado:
      - Que el producto seleccionado esté en el carro
      - Que aparezca el precio final en el carro
      - Que el color seleccionado esté descripto en el carro
  */
  it('CP004 - Vamos a agregar el equipo del CP001 al Carrito con el Color Verde - Entrar al carrito - Validar que el producto y sus especificaciones aparezcan en el carro', () =>{
    const datosBuilder = new DatosTiendaBuilder().equipoCP001().build();
    const tiendaMovistarPage = new TiendaMovistarHomePage();
    const detalleCelularPage = new DetalleCelularPage();
    const carritoPage = new CarritoPage();

    cy.viewport('macbook-16');

    tiendaMovistarPage.getCelularEspecifico(datosBuilder.equipo).click();
    cy.wait(8000);
    carritoPage.getColorVerde().click();
    carritoPage.getComprarButton().click({force: true});
    carritoPage.getAbrirCarrito().click();
    carritoPage.getValidarColor().should('include.text','verde');//Valida color verde
    carritoPage.getValidarCelular().should('include.text','Samsung Galaxy A14 4G');//Valida que el equipo sea el Samsung Galaxy A14 4G
    carritoPage.getValidarPrecio().should('include.text','279.999,00');//Valida que el precio sea $279.999
    //carritoPage.getValidarCantidad().should('include.text','1');

  })
})
