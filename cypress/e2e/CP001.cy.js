import DatosTiendaBuilder from "../utils/DatosTiendaBuilder";
import TiendaMovistarHomePage from "../pageObjects/TiendaMovistarHomePage"
import DetalleCelularPage from "../pageObjects/DetalleCelularPage";

describe('Casos de Prueba Cypress-Entrevista Práctica-Dopazo,Pilar', function(){
	beforeEach(function(){
		cy.visit('https://tiendaonline.movistar.com.ar', {timeout: 120000});
	})
  

  /* 
    CP001 - Validar cuotas en compra de equipo -Cuotas.3 -Equipo.A14 
    Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tiendaonline.movistar.com.ar), luego realizar la búsqueda del equipo A14 e ingresar al mismo y verificar que se pueda pagar en 3 cuotas sin interes
    Resultado esperado:
      - Que se pueda ingresar a la página indicada
      - Que el equipo seleccionado sea el A14
      - Que se indique en el equipo que puede ser pagado en 3 cuotas sin interes

    De no estar disponible el equipo A14 tomar alguno que si lo esté.
  */
	it('CP001 - Validar cuotas en compra de equipo -Cuotas.3 -Equipo.A14', function(){
    // Se observa que en la web se muestra la lupa de busqueda, pero se esconde inmediatamente
    // Se avanza con la automatizacion sin realizar la busqueda
    const datosBuilder = new DatosTiendaBuilder().equipoCP01().build();
    const tiendaMovistarPage = new TiendaMovistarHomePage();
    const detalleCelularPage = new DetalleCelularPage();

    cy.viewport('macbook-16');

    tiendaMovistarPage.getCelularEspecifico(datosBuilder.equipo)
      .should('include.text', '279.999')
      .and('include.text', '6 cuotas sin interés')
      .and('include.text', 'Samsung')
      .click();
    
    detalleCelularPage.getCalculaCuotasLink().click();

		detalleCelularPage.getSelectorBancoEspecifico('American Express').click();
    detalleCelularPage.getSelectorTarjetaEspecifica('American Express').click();
		//cy.get('btn-primary').click();

    //Assert textos de la cuota numero 3
	})

	//it.skip('CP02-Aplicar filtro de equipos -Memoria Interna.128GB-Precio Entre 200Ky300K', function(){})

})