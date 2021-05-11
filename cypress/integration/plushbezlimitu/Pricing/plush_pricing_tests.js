/// <reference  types="Cypress" />

import Plush_pricing_list_page from "../../../support/plush/Plush_pricing_list_page_9.js";




describe("Current price lists", () =>{ 

    const plush_pricing_list_page = new Plush_pricing_list_page();

    before(() => {
        cy.fixture("plushData").then(data => {
            globalThis.data = data;
        })
    })
    beforeEach(()=>{
            plush_pricing_list_page.clearCookies()
            plush_pricing_list_page.visitPricingListPage()
            plush_pricing_list_page.acceptRodo()
            plush_pricing_list_page.scrollIntoPricingPlace(data.pricingList[0])
    })

    it("Price list for the provision of telecommunications services tariff 'PLUSH ABO III' (from 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[2],data.pricingList[2], data.pricingList[3],data.urlPricingList[0],data.eq[0])
    })
    it("Price list of international calls and international roaming 4 (from 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[4],data.pricingList[4], data.pricingList[3],data.urlPricingList[1],data.eq[1])
    })
    it.only("Telecommunications service contract",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[5],data.pricingList[5], data.pricingList[3],data.urlPricingList[2],data.eq[2])
    })
})