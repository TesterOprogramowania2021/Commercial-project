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
        cy.visit(Cypress.env("plush_bez_limitu"),{timeout:10000});
        // cy.verifyURLadress(urlPath)
        // "plush_bez_limitu": "https://uat.plushbezlimitu.pl/",
        // "plush_bez_limitu_produkcja": "https://www.plushbezlimitu.pl/"
      
       
    }
    //metoa akceptująca pliki cookies oraz regulamin rodo
    clearCookies() {
        cy.clearCookiesAndLocalStages()
        
    }
    acceptRodo(){
    cy.acceptRodo(mainPageSelector.rodoAcceptButton)
    }
    clickOffertFirstRow(getText) {
        cy.get(mainPageSelector.desktopOffersFirstRow).find(mainPageSelector.desktopOffersKolButtons).contains(getText).click({ force: true })

    }
    clickOptionWhatYouNeed(newNumberText){
        cy.get(mainPageSelector.modalId)
        .find(mainPageSelector.popUpAllElements)
        .contains(newNumberText)
        .click({force: true});

    }

    
   









}
export default Plush_main_page;