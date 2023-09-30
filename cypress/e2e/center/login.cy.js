/// <reference types="cypress" />

import loc from '../../support/locators'

describe("Login tests", () => {

    beforeEach(() =>{
        cy.visit("https://center.umov.me/")
    })

    it("Should be login", () => {
        cy.login('trindade', 'cypress', '123456')
        cy.get(loc.MAIN.IMG_MENU).should("to.be.visible")
    })

    it("Should be login invalid", () => {
        cy.login('trindade', 'inexistente', 'invalida')
        cy.get(loc.LOGIN.MESSAGE_ERROR).should("have.text", "Login invalid.")
    })
})