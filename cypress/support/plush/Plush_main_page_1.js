/// <reference  types="Cypress" />


//main page object selectors
const mainPageSelector = {

    rodoAcceptButton: "#rodo-accept-all",
    desktopOffersFirstRow: ".offers > .desktop-offer",
    desktopOffersKolButtons: ".col-buttons",
    modalId: "#modal",
    popUpAllElements: ".plush-popup-offers"


}

class Plush_main_page {


    //metoda otwierająca główną stronę Plush
    getPlushMainPage() {
        cy
            .reload({ timeout: 5000 })
            .visit(Cypress.env("plush_bez_limitu"), { timeout: 15000 })
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
            .contains(newNumberText, {timeout:15000})
            .click({ force: true });

    }












}
export default Plush_main_page;