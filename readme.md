# Ejercitación Connectis
## _Practica Cypress_

## Casos de prueba
**CP001**: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tiendaonline.movistar.com.ar), luego realizar la búsqueda del equipo A14 e ingresar al mismo y verificar que se pueda pagar en 3 cuotas sin interes
    Resultado esperado:
      - Que se pueda ingresar a la página indicada
      - Que el equipo seleccionado sea el A14
      - Que se indique en el equipo que puede ser pagado en 3 cuotas sin interes

    De no estar disponible el equipo A14 tomar alguno que si lo esté.

**CP002**: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tiendaonline.movistar.com.ar), luego utilizando los filtros de la página, filtrar por Memoria Interna 128GB y precio entre “$200.000 - $300.000” e indicar cuantos equipos devuelve la búsqueda
  Resultado esperado:
  - Que se pueda ingresar a la página indicada
  - Que se pueda aplicar los filtros
  - Que se obtengan equipos luego del filtrado validando la cantidad mostrada

**CP003**: El objetivo del caso de prueba es visitar la tienda de Movistar 
  (https://tiendaonline.movistar.com.ar), 
  luego ingresar al tercer equipo de la lista inicial que se obtenga y 
  verificar que NO exista el método de pago de 60 cuotas para el banco Credicoop con Tarjeta VISA. 
      Resultado esperado: 
          - Que se pueda ingresar a la página indicada 
          - Que el equipo seleccionado sea el tercero de la lista 
          - Que no exista un medio de pago con 60 cuotas para el banco Credicoop con tarjeta VISA

**CP004**: El objetivo del caso de prueba es agregar un equipo al carrito con un color específico,
 validar que esté el producto en el carro de compras.
  Resultado esperado:
      - Que el producto seleccionado esté en el carro
      - Que aparezca el precio final en el carro
      - Que el color seleccionado esté descripto en el carro