import valuesRegistro from '../fixtures/registro-fixtures/valuesRegistro.json'

describe('Registro', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Registro un usuario de manera correcta', () => {
        cy.registro(
            valuesRegistro.firstName,
            valuesRegistro.lastName,
            valuesRegistro.password,
            valuesRegistro.confirmacionPassword,
            valuesRegistro.email)
        cy.fixture('registro').then((registro) => {
            cy.get(registro.labelResultadoRegistro).should('contain', registro.mensajeResultadoRegistroCompletado)
        })
    })
    it('Registro un usuario de manera incorrecta con confirmación incorrecta de Password', () => {
        cy.registro(
            valuesRegistro.firstName,
            valuesRegistro.lastName,
            valuesRegistro.password,
            valuesRegistro.confirmacionPasswordIncorrecto,
            valuesRegistro.email)
        cy.fixture('registro').then((registro) => {
            cy.get(registro.labelConfirmPasswordError).should('contain', registro.mensajeConfirmPasswordError)
        })
    })
})