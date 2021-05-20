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
    makeContractButton: "a[href='/telefony/przedluz']",
    upMenuMainProcessButtons: "[class='container devices-list'] > [class='abo-selector'] > ul >li"


    // [class="devices tile"]

}
//.main-section> .devices-listing-wrapper > section > div
class Plush_phones_pages {


    // clickButtonNewNumber() {
    //     cy
    //         .get(phonesPageSelectors.wontNewNumberButton,{timeout: 10000})
    //         .click()
    //         .then(($el) => {
    //         //weryfikacja koloru buttona 
    //         expect($el)
    //         .contain(data.iWontNewNumber);
    //         expect($el)
    //         .to.have.css("background");
    //     })
    // }
    clickButtonNewNumber2() {
        cy
            .get(phonesPageSelectors.upMenuMainProcessButtons, { timeout: 10000 })
            .eq(1)
            .click()
            .then(($el) => {
                //weryfikacja koloru buttona 
                expect($el)
                    .contain(data.iWontNewNumber);
                expect($el)
                    .to.have.css("background");
            })
    }
    checkedRadiobutton30zlSelection() {
        cy
            .get(phonesPageSelectors.offerSelection, { timeout: 10000 })
            .contains(data.radioButton30zl)
            .find(phonesPageSelectors.radiobutton)
            .should("be.checked")

    }
    checkedRadiobutton60zlSelection() {
        cy
            .get(phonesPageSelectors.offerSelection, { timeout: 10000 })
            .contains(data.radioButton60zl)
            .find(phonesPageSelectors.radiobutton)
            .should("be.checked")

    }
    clickCheckedButtonPhone(checkedText, phoneURL) {


        cy
            .get(phonesPageSelectors.mainPhoneListing, { timeout: 15000 })
            .contains(checkedText, { timeout: 5000 })
            .first({ timeout: 5000 }).should("have.css", "background-image", "linear-gradient(rgb(255, 218, 93), rgb(250, 193, 0))", { timeout: 3000 })
            .click({ force: true })


    }
    clickButtonIwontMoveMobileNumber(newNumberText) {
        cy
            .get(phonesPageSelectors.listPinkButtons, { timeout: 5000 })
            .first().then(($el) => {
                expect($el).contain(newNumberText);
                expect($el).to.have.css("background");
            })
    }
    clickButtonWontAbo() {
        cy.
            get(phonesPageSelectors.iwontChangeForAbo)
            .click().then(($el) => {
                expect($el).contain(data.iWontMoveForAbonament);
                expect($el).to.have.css("background");
            })

    }
    clickButtonMakeContract(makeConractText) {
        cy
            .get(phonesPageSelectors.makeContractButton)
            .click().then(($el) => {
                expect($el).contain(makeConractText)
                expect($el).to.have.css("background");
                cy.url().should("contain", "/przedluz")
            })


    }



}
export default Plush_phones_pages;