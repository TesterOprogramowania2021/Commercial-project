/// <reference  types="Cypress" />

const pricingPageSelectors = {

    rodoAcceptButton: "#rodo-accept-all",
    pricingPlace: ":nth-child(2) > h2",
    actualPricing: "Aktualne cenniki",
    allPricingListSelector: ".document-box > .document-category >ul > li"


}


class Plush_pricing_list_page {


    visitPricingListPage() {
        cy
            .visit(Cypress.env("plush_bez_limitu_cenniki_produkcja"))
            .verifyURLadress(Cypress.env("plush_bez_limitu_cenniki_produkcja"))
    }
    clearCookies() {
        cy
            .clearCookiesAndLocalStages()
    }
    acceptRodo() {
        cy
            .acceptRodo(pricingPageSelectors.rodoAcceptButton)
    }

    scrollIntoPricingPlace(pricingListText) {
        cy
            .get(pricingPageSelectors.pricingPlace).scrollIntoView().should("have.text", pricingListText)
    }


    checkedFirstActualPricingDocument(actualPricingText, PricingText0, selector0, apiURL, getRequest0, eq) {
        cy
            .contains(pricingPageSelectors.actualPricing).should("have.text", actualPricingText)
        cy
            .get(pricingPageSelectors.allPricingListSelector).eq(eq).should("have.text", PricingText0)
        cy
            .contains(selector0).invoke("removeAttr", "target").click({ force: true })
        cy
            .url().should("include", apiURL)
            .validate200ResponseCode(getRequest0)
    }
    checkedFirstActualPricingDocumentContainAssertion(actualPricingText, PricingText0, selector0, apiURL, getRequest0, eq) {
        cy
            .contains(pricingPageSelectors.actualPricing).should("have.text", actualPricingText)
        cy
            .get(pricingPageSelectors.allPricingListSelector)
            .eq(eq)
            .contains(PricingText0)
            .invoke("removeAttr", "target")
            .click({ force: true })
        cy
            .url().should("include", apiURL)
            .validate200ResponseCode(getRequest0)
    }

}
export default Plush_pricing_list_page;