describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Login con mail incorrecto', () => {
        cy.fixture('login').then((login) => {
            cy.get(login.loginLink).click()
            cy.get(login.email).type('email@incorrecto.com')
            cy.get(login.password).type('passwordIncorrecto')
            cy.get(login.loginButton).click()
            cy.get(login.incorrectLoginBanner).should('contain', 'Authentication failed.')
        })
    })
})