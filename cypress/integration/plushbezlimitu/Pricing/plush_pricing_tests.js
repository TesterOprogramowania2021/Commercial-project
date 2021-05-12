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
    it("Telecommunications service contract",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[5],data.pricingList[5], data.pricingList[3],data.urlPricingList[2],data.eq[2])
    })
    it("Telecommunications services contract - number transfer",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[6],data.pricingList[6], data.pricingList[3],data.urlPricingList[3],data.eq[3])
    })
    it("Terms and Conditions of the Promotion 'In the UK as at home'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[7],data.pricingList[7], data.pricingList[3],data.urlPricingList[4],data.eq[4])
    })
    it("PLUSH SUBSCRIPTION (as of 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[8],data.pricingList[8], data.pricingList[3],data.urlPricingList[5],data.eq[5])
    })
    it("PLUSH SUBSCRIPTION 24 months (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[9],data.pricingList[9], data.pricingList[3],data.urlPricingList[6],data.eq[6])
    })
    it("PLUSH SUBSCRIPTION 24 months (Outlet) (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[10],data.pricingList[10], data.pricingList[3],data.urlPricingList[7],data.eq[7])
    })
    it("Packages in PLUSH SUBSCRIPTION 24 months (as of 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[11],data.pricingList[11], data.pricingList[3],data.urlPricingList[8],data.eq[8])
    })
    it("Duets in Plush (dated 1.02.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[12],data.pricingList[12], data.pricingList[3],data.urlPricingList[9],data.eq[9])
    })
    it("Tidal Music (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[13],data.pricingList[13], data.pricingList[3],data.urlPricingList[10],data.eq[10])
    })
    it("HBO GO – PAKIET DANYCH 3 (z dnia 28.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[14],data.pricingList[14], data.pricingList[3],data.urlPricingList[11],data.eq[11])
    })
    it("Appendix 2 to the Invoice: Terms and Conditions for the promotional sale of equipment (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[15],data.pricingList[15], data.pricingList[3],data.urlPricingList[12],data.eq[12])
    })
    it.only("Appendix 2 to the Invoice: Terms and Conditions of promotional sale of equipment – for Regular Customers (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[16],data.pricingList[16], data.pricingList[3],data.urlPricingList[13],data.eq[13])
    })
})