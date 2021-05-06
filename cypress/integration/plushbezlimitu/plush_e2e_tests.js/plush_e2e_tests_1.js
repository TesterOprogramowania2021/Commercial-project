/// <reference  types="Cypress" />


import Plush_main_page from "../../../support/plush/Plush_main_page_1"


describe("First part of E2E plush tests", () =>{ 

    before(() => {
        cy.fixture("plushData").then(data => {
            globalThis.data = data;
        })
    })

    it("Placing an order for ACQ in the offer of 30 PLN / month with the device",()=>{




    })

})