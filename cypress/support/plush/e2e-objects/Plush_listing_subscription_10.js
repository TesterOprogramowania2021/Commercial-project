/// <reference  types="Cypress" />


const listingPageSelectors = {

    mainOffers: "#offers-desktop >div",
    getPhone: " DOBIERZ TELEFON ",
    noPhone: " KUP BEZ TELEFONU ",
    rodoAcceptButton: "#rodo-accept-all",



}

class Plush_listing_subscription {




    getPlushListingPage() {
        cy
            // .reload({ timeout: 5000 })
            .visit(Cypress.env("plush_bez_limitu_abonament_listing_UAT"))
            .validate200ResponseCodeSmoke(Cypress.env("plush_bez_limitu_abonament_listing_UAT"), { timeout: 30000 })


    }
    acceptRodo() {
        cy
            .acceptRodo(listingPageSelectors.rodoAcceptButton)

    }
    getOffer30zlFor24month(setOffer) {
        cy
            .get(listingPageSelectors.mainOffers)
            .eq(1)
            .contains(setOffer)
            .click({ force: true })
    }
    getOffer30zlForAllTime(setOffer) {
        cy
            .get(listingPageSelectors.mainOffers)
            .first()
            .contains(setOffer)
            .click({ force: true })
    }
    getOffer60zlForAllTime(setOffer) {
        cy
            .get(listingPageSelectors.mainOffers)
            .eq(2)
            .contains(setOffer)
            .click({ force: true })
    }





}
export default Plush_listing_subscription;