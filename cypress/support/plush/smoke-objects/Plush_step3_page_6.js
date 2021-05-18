/// <reference  types="Cypress" />

const step3PageSelectors = {

    mainMothlyPrice: ".offer-summary > .prices > .price > .amount",
    yourData: "Twoje Dane",
    allYourData: "ul[class='fields']",
    checkboxAllAccepts: "input[type='checkbox']",
    acceptOrderButton: "#basket-go-to-thank-you",
    buttonConfirm: "#confirm",
    popUpText: ".modal-content > .box-info > .box > .message > p"
}

class Plush_step3_page {


    checkedMainPrice(priceMain30, url) {
        cy
            .verifyURLadress(url, { timeout: 10000 })
            .get(step3PageSelectors.mainMothlyPrice, { timeout: 6000 })
            .contains(priceMain30)

    }
    clickcheckboxAllAccepts() {
        cy
            .get(step3PageSelectors.checkboxAllAccepts)
            .should("not.be.checked")
            .check({ force: true })
            .should("be.checked");
        
    }

    clickAcceptButton() {
        cy
            .get(step3PageSelectors.acceptOrderButton)
            .scrollIntoView()
            .click({ force: true })
    }
    clickConfirmButton() {
        cy
            .get(step3PageSelectors.buttonConfirm, { timeout: 15000 })
            .scrollIntoView()
            .click({ force: true })
    }
    acceptPopUp(popUptext){
        cy.get(step3PageSelectors.popUpText, {timeout:15000}).should("have.text",popUptext, {timeout: 15000})

    }

}
export default Plush_step3_page;