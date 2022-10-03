/// <reference types="cypress"/>

describe("Testes with Todo List", () => {

    beforeEach(() => {
        cy.visit("https://example.cypress.io/todo")
    })

    it("Should be todo new task", () => {
        const newTask = "Fix the bug"

        cy.get(".todo-list li").should("have.length", 2)

        cy.get('[data-test="new-todo"]').type(`${newTask}{enter}`)

        cy.get(".todo-list li").should("have.length", 3)
        cy.get(".todo-list li").last().should("have.text", `${newTask}`)

    })

    describe("Tests with todo new task created", () => {
        const newTask = "Fix the bug"

        beforeEach(() => {
            cy.get('[data-test="new-todo"]').type(`${newTask}{enter}`)
        })

        it("Should task check", () => {
            // cy.get(".todo-list li")
            //     .last()
            //     .find("input")
            //     .check()
            //     .should("be.checked")

            cy.get(".todo-list")
                .contains(`${newTask}`)
                .parent()
                .find("input")
                .check()
                .should("be.checked")
        })

    })

})