describe('Buscar elementos', () => {
    it('Busqueda de elementos con multiples resultados', () => {
        cy.visit('/');
        cy.fixture('index').then((index) => {
            cy.get(index.searchButton)
        })
    })
})