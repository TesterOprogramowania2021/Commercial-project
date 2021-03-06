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
    selectOptions: ".select-option",
    selectService: ".select-container > .selected-option",
    forFinishedTime: "na koniec okresu wypowiedzenia",
    priceFormulagePerson: ".amount",
    poUPoperator: "[style=\"\"] > .select-container > .selected-option",
    setFinishedTransferForCard: ".otp-valid-message > :nth-child(3) > .input-radio > label",
    lastPromotionTime: ".otp-valid-message > :nth-child(3) > .input-radio > :nth-child(3) > span"

}

class Plush_person_formulage_page {




    fillFormulage(firstName, lastName, email, phoneNumber, presonId, documentId, price) {
        cy
            .get(personFormulagePageSelectors.firstName, { timeout: 30000 })
            // .reload({timeout:30000})
            .get(personFormulagePageSelectors.firstName, { timeout: 30000 })
            .type(firstName)
            .verifyURLadress(data.step1URL)
            .get(personFormulagePageSelectors.lastName)
            .type(lastName)
            .get(personFormulagePageSelectors.email)
            .type(email)
            .get(personFormulagePageSelectors.phone)
            .type(phoneNumber, { force: true })
            .get(personFormulagePageSelectors.personId)
            .type(presonId)
            .get(personFormulagePageSelectors.idNumber)
            .type(documentId, { force: true })
            .get(personFormulagePageSelectors.buttonNext)
            .click();
    }
    setOTPNumber(otpPhoneNumber) {
        cy
            .get(personFormulagePageSelectors.otpNumberSelector, { timeout: 20000 })
            .type(otpPhoneNumber, { force: true })
            .get(personFormulagePageSelectors.otpSubmitButton)
            .click({ force: true })


    }
    verifyPriceOnFormulage(textPrice) {
        cy

            .get(personFormulagePageSelectors.priceLine, { timeout: 30000 })
            .contains(textPrice)
    }
    setAndAcceptPassword(password) {
        cy
            .get(personFormulagePageSelectors.passwordInput, { timeout: 10000 })
            .type(password)
            .get(personFormulagePageSelectors.buttonSend)
            .click({ force: true })
    }
    setPopUPWebOperator(operator) {
        cy
            .get(personFormulagePageSelectors.webOberatorDropDown)
            .eq(0)
            .click({ force: true })
            .get(personFormulagePageSelectors.selectOptions)
            .contains(operator)
            .click({ force: true });
    }
    setPopUPWebOperatorService(service) {
        cy
            .get(personFormulagePageSelectors.poUPoperator)
            .click({ force: true })
        cy
            .contains(service).click({ force: true })
    }
    setNumberDateTransfer() {
        cy
            .contains(personFormulagePageSelectors.forFinishedTime).click({ force: true })
    }
    setNumberDateTransfer2(cardText) {
        cy
            .get(personFormulagePageSelectors.setFinishedTransferForCard).click({ force: true })
            .get(personFormulagePageSelectors.setFinishedTransferForCard).contains(cardText)
    }
    setNumberDateTransfer3(lastPromotionText) {
        cy
            .get(personFormulagePageSelectors.lastPromotionTime).click({ force: true })
            .get(personFormulagePageSelectors.lastPromotionTime).contains(lastPromotionText)
    }







}
export default Plush_person_formulage_page;