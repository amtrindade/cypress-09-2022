/// <reference types="cypress"/>

describe("Testes com elementos web", () => {

    beforeEach(() => {
        cy.visit("/elementsweb.html")
    })

    it("Deveria acessar o título da página", () => {

        cy.title().should("to.be.equal", "WebElements Test Page Lab")

    })

    it("Deveria escrever o nome", () => {

        cy.get("input[name='txtbox1']")
            .type("Antonio")
            .should("have.value", "Antonio")

    })
})