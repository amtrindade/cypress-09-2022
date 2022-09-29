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

        //Type utilizando o force: true
        cy.get(`[name='txtbox2']`)
            .type("Antonio", {force: true})
            .should("have.value", "Antonio")

    })

    it("Deveria validar textfields habilitados", () => {

        cy.get("input[name='txtbox1']")
            .should("be.enabled")

        cy.get(`[name='txtbox2']`)
            .should('be.disabled')
            .should('not.be.enabled')
    })

    it("Deveria validar o texto de um label", () =>{

        cy.get('form > :nth-child(1) > .text-muted')
            .should("have.text", "TextField:")
    })
})