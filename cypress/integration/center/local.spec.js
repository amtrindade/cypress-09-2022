/// <reference types="cypress" />

import loc from '../../support/locators'

describe("Work with locals", () => {

    beforeEach(() => {
        cy.visit("https://center.umov.me/")
        cy.login('trindade', 'cypress', 'mudarsenha')
        cy.get(loc.MAIN.MENU_LOCALS).click()
    })

    it("Should be create new local", () => {
        const descriptionLocal = 'Iguatemi ' + Math.floor(Math.random() * 1001);
        const descriptionCorporateName = 'Shopping ' + Math.floor(Math.random() * 1001);

        //Preenche os dados do cadastro
        cy.get(loc.LIST_LOCAL.BTN_NEW_LOCAL).click()
        cy.get(loc.DETAIL_LOCAL.TF_DESCRIPTION).type(descriptionLocal)
        cy.get(loc.DETAIL_LOCAL.TF_CORPORATE_NAME).type(descriptionCorporateName)
        cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()

        //Pesquisa o local cadastrado
        cy.get(loc.LIST_LOCAL.TF_SEARCH).type(descriptionLocal)
        cy.get(loc.LIST_LOCAL.BTN_SEARCH).click()

        //Assercao com locator baseado no nome da variavel descrição
        cy.xpath(loc.LIST_LOCAL.FN_XP_FIND_LOCAL(descriptionLocal)).should("exist");

    })

    it.only("Edit local",() => {
        //Insere o local
        const descriptionLocal = 'Bourbon ' + Math.floor(Math.random() * 1001);
        const descriptionCorporateName = 'Shopping ' + Math.floor(Math.random() * 1001);

        //Preenche os dados do cadastro
        cy.get(loc.LIST_LOCAL.BTN_NEW_LOCAL).click()
        cy.get(loc.DETAIL_LOCAL.TF_DESCRIPTION).type(descriptionLocal)
        cy.get(loc.DETAIL_LOCAL.TF_CORPORATE_NAME).type(descriptionCorporateName)
        cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()

        //Pesquisa o local cadastrado
        cy.get(loc.LIST_LOCAL.TF_SEARCH).type(descriptionLocal)
        cy.get(loc.LIST_LOCAL.BTN_SEARCH).click()

        //Coloca em edição o local inserido
        cy.xpath(loc.LIST_LOCAL.FN_XP_FIND_LOCAL_EDIT(descriptionLocal)).click()

        const descriptionEdit = descriptionLocal + ' Edit'

        //Edita a descrição
        cy.get(loc.DETAIL_LOCAL.TF_DESCRIPTION).clear().type(descriptionEdit)
        //Salva o local
        cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()

        //Pesquisa o local editado
        cy.get(loc.LIST_LOCAL.TF_SEARCH).type(descriptionEdit)
        cy.get(loc.LIST_LOCAL.BTN_SEARCH).click()

        //Assercao com locator baseado no nome da variavel descrição
        cy.xpath(loc.LIST_LOCAL.FN_XP_FIND_LOCAL(descriptionEdit)).should("exist")

    })

})