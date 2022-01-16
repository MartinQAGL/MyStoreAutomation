describe('Login', function() {
    beforeEach(function() {
        cy.visit('/')
        cy.fixture('login-fixtures/valuesLogin').then(valuesLogin => {
            this.valuesLogin = valuesLogin
        })
    })
    it('Login con mail incorrecto', function()  {
        cy.login(this.valuesLogin.email, this.valuesLogin.password)
        cy.fixture('login').then((login) => {
            cy.get(login.incorrectLoginBanner).should('contain', this.valuesLogin.mensajeErrorEsperado)
        })
    })
})