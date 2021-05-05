/// <reference  types="Cypress" />


const contractPageSelector = {

    passwordInut: "#otp-pass",
    sendButton: "#otp-pass-form-submit",
    phoneInput: "#otp-number",
    sendPhoneButton: "#otp-number-form-submit",
    writleTitleTextSelector: "div[class='otp-number']>h3[class='title']"

}

class Plush_contract_page {

    typePhoneNumber(phone, textWritePhoneNumber){
        cy.get(contractPageSelector.writleTitleTextSelector).should("have.text",textWritePhoneNumber)
        cy.get(contractPageSelector.phoneInput).type(phone)
        cy.get(contractPageSelector.sendPhoneButton).click({force:true});
    }


  
   
    typeAndAcceptPassword(password) {
        cy.get(contractPageSelector.passwordInut).type(password);
        cy.get(contractPageSelector.sendButton).click({force:true});
        
    }

    
   









}
export default Plush_contract_page;