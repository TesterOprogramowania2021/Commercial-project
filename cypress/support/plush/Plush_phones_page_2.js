/// <reference  types="Cypress" />

const phonesPageSelectors = {

    wontNewNumberButton: "a[href='/telefony/nowy-numer']",
    transferNumberButton: "a[href='/telefony/przenies-numer']",
    offerSelection: "[class='filters-item filters-abo']>[class='input-radio column valid']",
    radiobutton: "input[type='radio']",
    checkedClass: ".checked",
    mainPhoneListing: "[class='device device-box tile animated fade-in shake']",
    phoneDeviceName: "device-name",
    iwontChangeForAbo: "a[href='/telefony/przejdz-na-abonament']",
    listPinkButtons: "li[class='list-item']",
    makeContractButton: "a[href='/telefony/przedluz']"
   
    // [class="devices tile"]

}
//.main-section> .devices-listing-wrapper > section > div
class Plush_phones_pages {


    clickButtonNewNumber() {
        cy.get(phonesPageSelectors.wontNewNumberButton,{timeout: 10000}).click().then(($el) => {
            //weryfikacja koloru buttona 
            expect($el).contain(data.iWontNewNumber);
            expect($el).to.have.css("background");
        })
    }
    checkedRadiobutton30zlSelection(pricePearMonth) {
        cy.get(phonesPageSelectors.offerSelection, {timeout:10000})
            .contains(data.radioButton30zl)
            .find(phonesPageSelectors.radiobutton)
            .should("be.checked")
            
           
    }
    clickCheckedButtonPhone(checkedText, phoneURL) {

       
        cy.get(phonesPageSelectors.mainPhoneListing,{ timeout: 15000 })
            .contains(checkedText,{timeout: 5000})
            .first().should("have.css", "background-image", "linear-gradient(rgb(255, 218, 93), rgb(250, 193, 0))",{timeout:3000})
            .click({ force: true })
            // .wait(3000);
        cy.verifyURLadress(phoneURL, { timeout: 10000 })
            
    }
    clickButtonIwontMoveMobileNumber(newNumberText){
        cy.get(phonesPageSelectors.listPinkButtons,{timeout:5000}).first().then(($el) => {
            
            //weryfikacja koloru buttona 
            expect($el).contain(newNumberText);
            expect($el).to.have.css("background");
        })

      
    }
    clickButtonWontAbo() {
        cy.get(phonesPageSelectors.iwontChangeForAbo).click().then(($el) => {
            //weryfikacja koloru buttona 
            expect($el).contain(data.iWontMoveForAbonament);
            expect($el).to.have.css("background");
        })

    }
    clickButtonMakeContract(makeConractText) {
        cy.get(phonesPageSelectors.makeContractButton).click().then(($el) => {
            //weryfikacja koloru buttona 
            expect($el).contain(makeConractText);
            expect($el).to.have.css("background");
            cy.url().should("contain","/przedluz")
        })


    }



}
export default Plush_phones_pages;