describe('Buscar elementos', () => {
    it('Busqueda de elementos con multiples resultados', () => {
        cy.visit('/');
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('dress')
            cy.get(index.searchButton).click()
        })
        cy.fixture('searchResult').then((searchResult)=> {
            cy.get(searchResult.title).should('contain','dress')
        })
    })
})