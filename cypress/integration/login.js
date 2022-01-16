import valuesLogin from '../fixtures/login-fixtures/valuesLogin.json'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Login con mail incorrecto', () => {
        cy.login(valuesLogin.email, valuesLogin.password)
        cy.fixture('login').then((login) => {
            cy.get(login.incorrectLoginBanner).should('contain', valuesLogin.mensajeErrorEsperado)
        })
    })
})