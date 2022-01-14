describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Login con mail incorrecto', () => {
        cy.login('email@incorrecto.com', 'passwordIncorrecto')
        cy.fixture('login').then((login) => {
            cy.get(login.incorrectLoginBanner).should('contain', 'Authentication failed.')
        })
    })
})