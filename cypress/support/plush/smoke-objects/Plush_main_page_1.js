/// <reference  types="Cypress" />


//main page object selectors
const mainPageSelector = {

    rodoAcceptButton: "#rodo-accept-all",
    desktopOffersFirstRow: ".offers > .desktop-offer",
    desktopOffersKolButtons: ".col-buttons",
    modalId: "#modal",
    popUpAllElements: ".plush-popup-offers",
    mainLogo: ".LogoComponent"


}

class Plush_main_page {


    //metoda otwierająca główną stronę Plush
    getPlushMainPage() {
        cy
            // .reload({ timeout: 5000 })
            .visit(Cypress.env("plush_bez_limitu_abonament_listing_UAT"))
            .validate200ResponseCodeSmoke(Cypress.env("plush_bez_limitu"), { timeout: 30000 })
        // .verifyURLadress(Cypress.env("plush_bez_limitu"))

    }
    //metoa akceptująca pliki cookies oraz regulamin rodo
    clearCookies() {
        cy
            .clearCookiesAndLocalStages()

    }
    acceptRodo() {
        cy
            .acceptRodo(mainPageSelector.rodoAcceptButton)
            .get(mainPageSelector.mainLogo, { timeout: 20000 }).last().click({ force: true })
            .verifyURLadress(Cypress.env("plush_bez_limitu"))


    }
    clickOffertFirstRow(getText) {
        cy
            .get(mainPageSelector.desktopOffersFirstRow)
            .find(mainPageSelector.desktopOffersKolButtons)
            .contains(getText)
            .click({ force: true })

    }
    clickOptionWhatYouNeed(newNumberText) {
        cy
            .get(mainPageSelector.modalId)
            .find(mainPageSelector.popUpAllElements)
            .contains(newNumberText, { timeout: 15000 })
            .click({ force: true });

    }
    clickOffert30zlNoLimit(getText) {
        cy
            .get(mainPageSelector.desktopOffersFirstRow)
            .find(mainPageSelector.desktopOffersKolButtons)
            .eq(1)
            .contains(getText)
            .click({ force: true })

    }


}
export default Plush_main_page;