/// <reference  types="Cypress" />

const phonePageSelectors = {

    buttonGetNewNumber: "#move-id",
    logoImage: ".logo > img",
    buttonMoveNewNumber: "#move-id",
}

class Plush_phone_page {


    clickGetNumberButton() {
        cy
            .get(phonePageSelectors.buttonGetNewNumber, { timeout: 15000 })
            .click({ force: true })
            .get(phonePageSelectors.logoImage, { timeout: 10000 })
            .should("be.visible")
        //  cy.reload({timeout:5000})

    }

}
export default Plush_phone_page;