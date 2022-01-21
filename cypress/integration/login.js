import valuesLogin from '../fixtures/login-fixtures/valuesLogin.json'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Login con mail incorrecto', () => {
        cy.login(valuesLogin.emailIncorrecto, valuesLogin.passwordIncorrecto)
        cy.fixture('login').then((login) => {
            cy.get(login.incorrectLoginBanner).should('contain', valuesLogin.mensajeErrorEsperado)
        })
    })
    it('Login con mail correcto', () => {
        cy.login(valuesLogin.emailCorrecto, valuesLogin.passwordCorrecto)
        cy.fixture('login').then((login) => {
            cy.get(login.iconoLogOut).should('be.visible')
        })
    })
})