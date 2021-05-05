/// <reference  types="Cypress" />

const personFormulagePageSelectors = {

    buttonGetNewNumber: "#move-id",
    firstName: "#first-name",
    lastName: "#last-name",
    email: "#email",
    phone: "#phone",
    personId: "#pesel",
    idNumber: "#id-number",
    buttonNext: "#basket-go-to-step-2",
    otpNumberSelector: "#otp-number",
    otpSubmitButton: "#otp-number-form-submit",
    rightZonePrice: ".with-device > .shadow--bottom > .offer",
    priceLine: ".offer-excerpt",
    passwordInput: "#otp-pass",
    buttonSend: "#otp-pass-form-submit",
    webOberatorDropDown: ":nth-child(3) > :nth-child(1) > .select-container > .selected-option",
    selectOptions : ".select-option",
    selectService : ".select-container > .selected-option",
    forFinishedTime: "na koniec okresu wypowiedzenia"

   



}

class Plush_person_formulage_page {

   
    

    fillFormulage(firstName, lastName, email, phoneNumber, presonId, documentId, url) {
        cy
        .get(personFormulagePageSelectors.firstName,{ timeout: 30000 })
        .type(firstName)
        .verifyURLadress(data.step1URL)
        .get(personFormulagePageSelectors.lastName)
        .type(lastName)
        .get(personFormulagePageSelectors.email)
        .type(email)
        .get(personFormulagePageSelectors.phone)
        .type(phoneNumber,{ force: true })
        .get(personFormulagePageSelectors.personId)
        .type(presonId)
        .get(personFormulagePageSelectors.idNumber)
        .type(documentId,{ force: true })
        .get(personFormulagePageSelectors.buttonNext)
        .click();
    }
    setOTPNumber(otpPhoneNumber) {
        cy.get(personFormulagePageSelectors.otpNumberSelector,{timeout:10000})
        .type(otpPhoneNumber,{force:true})
        cy.get(personFormulagePageSelectors.otpSubmitButton)
        .click({force: true})
       
    }
    verifyPriceOnFormulage(textPrice){
        cy.get(personFormulagePageSelectors.rightZonePrice)
        .find(personFormulagePageSelectors.priceLine)
        .contains(textPrice)
    }
    setAndAcceptPassword(password){
        cy.get(personFormulagePageSelectors.passwordInput,{timeout:5000})
        .type(password)
        .get(personFormulagePageSelectors.buttonSend)
        .click({force:true})
    }
    setPopUPWebOperator(operator){
        cy.get(personFormulagePageSelectors.webOberatorDropDown).eq(0)
        .click({force:true})
        cy.get(personFormulagePageSelectors.selectOptions).contains(operator)
        .click({force:true});
    }
    setPopUPWebOperatorService(service){
        cy.get('[style=""] > .select-container > .selected-option').click({force:true})
        cy.contains(service).click({force: true})
    }
    setNumberDateTransfer(){
        cy.contains(personFormulagePageSelectors.forFinishedTime).click({force: true})
    }
  



}
export default Plush_person_formulage_page;