import valuesBusqueda from '../fixtures/busqueda-fixtures/valuesBusqueda.json'

describe('Busqueda', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Busqueda de producto inexistente', () => {
        cy.busqueda(valuesBusqueda.productoInexistente)
        cy.fixture('busqueda').then((busqueda) => {
            cy.get(busqueda.elementoProductoNoEncontrado).should('contain', busqueda.mensajeProductoNoExistente)
        })
    })
    it('Busqueda de producto existente', () => {
        cy.busqueda(valuesBusqueda.productoExistente)
        cy.fixture('busqueda').then((busqueda) => {
            cy.get(busqueda.elementoProductoEncontrado).should('contain', valuesBusqueda.productoExistente)
        })
    })
})