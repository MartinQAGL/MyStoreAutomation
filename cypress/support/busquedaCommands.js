Cypress.Commands.add('busqueda', (producto) => {
    cy.fixture('busqueda').then((busqueda) => {
        cy.get(busqueda.cuadroTextoBusqueda).type(producto)
        cy.get(busqueda.botonBusqueda).click()
    })
})