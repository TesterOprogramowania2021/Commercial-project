/// <reference  types="Cypress" />

const adressFormulagePageSelectors = {

    street: "#street",
    streetNr: "#street-nr",
    apartmentNumber: "#flat-nr",
    postNumber: "#post-code",
    cityNumber: "#locality",
    selectConteiner: ".select-options",
    dropDown: "div[class='selected-option']",
    buttonNext: "#basket-go-to-step-3",
    employer: "#EMPLOYER",
    phoneEmployer: "#EMPLOYER_PHONE",
    moneySource: "#OCCUPATION > .select-container > .selected-option",
    documentForm: "[class='input-radio column required valid form-of-concluding-type'] >label"






}

class Plush_adress_formulage_page {


    fillAdressFormulage(streat, buildingNumber, apartmentNumber, postNumber, cityNumber, url) {
        cy.get(adressFormulagePageSelectors.street).type(streat);
        cy.verifyURLadress(data.step2URL);
        cy.get(adressFormulagePageSelectors.streetNr).type(buildingNumber);
        cy.get(adressFormulagePageSelectors.apartmentNumber).type(apartmentNumber, { force: true });
        cy.get(adressFormulagePageSelectors.postNumber).type(postNumber);
        cy.get(adressFormulagePageSelectors.cityNumber).type(cityNumber);
    }
    selectDocument(documentName) {
        cy.get(adressFormulagePageSelectors.dropDown).click({ force: true })
        cy.get(adressFormulagePageSelectors.selectConteiner).contains(documentName).click({ force: true })
    }
    fillDocumentFormulage(employerText, emplpyerPhoneText, persoWhoImproveYourMoneySourceText){
        cy.get(adressFormulagePageSelectors.employer).type(employerText,{force: true})
        cy.get(adressFormulagePageSelectors.phoneEmployer).type(emplpyerPhoneText,{force: true})
        cy.get(adressFormulagePageSelectors.moneySource).click({force:true})
        cy.contains(persoWhoImproveYourMoneySourceText).click({force:true})
    }
    clickButtonNext() {
        cy.get(adressFormulagePageSelectors.buttonNext).click();

    }
    setForOfDocumentType(index){
        cy.get(adressFormulagePageSelectors.documentForm).eq(index).click({force: true});
    }




}
export default Plush_adress_formulage_page;