/// <reference  types="Cypress" />

const phonePageSelectors = {

    buttonGetNewNumber: "#move-id",
    logoImage: ".logo > img",
    buttonMoveNewNumber: "#move-id",
    aboPrice: ".abo-price > :nth-child(1)"
}

class Plush_phone_page {


    clickGetNumberButton(priceText) {
        cy
            .get(phonePageSelectors.buttonGetNewNumber, { timeout: 15000 })
            .click({ force: true })
            .get(phonePageSelectors.logoImage, { timeout: 10000 })
            .should("be.visible")

    }
    checkedPriceAbo(priceText) {


        cy.get(phonePageSelectors.aboPrice).contains(priceText)
    }

}
export default Plush_phone_page;