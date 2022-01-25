Cypress.Commands.add('registro', (firstName,lastName,password,confirmacionPassword,email) => {
    cy.fixture('registro').then((registro) => {
        cy.get(registro.botonRegister).click()
        cy.get(registro.radioButtonMale).click()
        cy.get(registro.cuadroTextoFirstName).type(firstName)
        cy.get(registro.cuadroTextoLastName).type(lastName)
        cy.get(registro.cuadroTextoEmail).type(email)
        cy.get(registro.cuadroTextoPassword).type(password)
        cy.get(registro.cuadroTextoConfirmPassword).type(confirmacionPassword)
        cy.get(registro.botonConfirmarRegister).click()
    })
})