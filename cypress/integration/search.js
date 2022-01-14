

describe('Buscar elementos', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Busqueda de elementos con multiples resultados', () => {
        cy.search('dress')
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.title).should('contain', 'dress')
        })
    })
    it('Busqueda de elementos sin resultados', () => {
        cy.search('qwerty')
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.alert).should('contain', 'No results were found for your search')
        })
    })
})