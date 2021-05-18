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
        cy.get(adressFormulagePageSelectors.selectConteiner).contains(data.documentName[0]).click({ force: true })
        cy.get(adressFormulagePageSelectors.buttonNext).click();
    }
    clickButtonNext() {
        cy.get(adressFormulagePageSelectors.buttonNext).click();

    }




}
export default Plush_adress_formulage_page;