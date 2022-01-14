

describe('Buscar elementos', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Busqueda de elementos con multiples resultados', () => {
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('dress')
            cy.get(index.searchButton).click()
        })
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.title).should('contain', 'dress')
        })
    })
    it('Busqueda de elementos sin resultados', () => {
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('qwerty')
            cy.get(index.searchButton).click()
        })
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.alert).should('contain', 'No results were found for your search')
        })
    })
})