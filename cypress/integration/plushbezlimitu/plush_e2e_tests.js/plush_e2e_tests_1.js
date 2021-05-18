/// <reference  types="Cypress" />


import Plush_main_page from "../../../support/plush/Plush_main_page_1"
import Plush_phones_pages from "../../../support/plush/Plush_phones_page_2"
import Plush_phone_page from "../../../support/plush/Plush_phone_page_3";
import Plush_person_formulage_page from "../../../support/plush/Plush_person_formulage_page_4";
import Plush_adress_formulage_page from "../../../support/plush/Plush_adress_formulage_page_5";
import Plush_step3_page from "../../../support/plush/Plush_step3_page_6";
import Plush_finished_page from "../../../support/plush/Plush_finished_page_7";
import Plush_contract_page from "../../../support/plush/Plush_make_contract_page_8";


describe("First part of E2E plush tests", () =>{ 
    const plush_main_page = new Plush_main_page();
    const plush_phones_pages  = new Plush_phones_pages();
    const plush_phone_page = new Plush_phone_page();
    const plush_person_formulage_page = new Plush_person_formulage_page();
    const plush_adress_formulage_page = new Plush_adress_formulage_page();
    const plush_step3_page = new Plush_step3_page()
    const plush_finished_page = new Plush_finished_page();
    const plush_contract_page = new Plush_contract_page();

    before(() => {
        cy.fixture("plushData").then(data => {
            globalThis.data = data;
        })
    })
 
    beforeEach(() => {
        
        plush_main_page.clearCookies()
        plush_main_page.getPlushMainPage(data.urlAdress);
        plush_main_page.acceptRodo()   
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        
          
    })

    it("Placing an order for ACQ in the offer of 30 PLN / month with the device",()=>{

        plush_main_page.clickOffertFirstRow(data.textGetPhone);
        plush_phones_pages.clickButtonNewNumber2();
        plush_phones_pages.checkedRadiobutton30zlSelection(data.radioButton30zl); 
        plush_phones_pages.clickCheckedButtonPhone(data.checked,data.phoneURL)
        plush_phone_page.clickGetNumberButton(data.step1URL);
        plush_person_formulage_page.fillFormulage(data.userDataFormulage[0],data.userDataFormulage[1],data.userDataFormulage[2],data.userDataFormulage[3],data.userDataFormulage[4],data.userDataFormulage[5],data.step1URL,data.prices[0])
        plush_adress_formulage_page.fillAdressFormulage(data.adressDataFormulage[0], data.adressDataFormulage[1], data.adressDataFormulage[2],data.adressDataFormulage[3],data.adressDataFormulage[4]);
        plush_adress_formulage_page.selectDocument(data.documentName[0])
        plush_step3_page.checkedMainPrice(data.prices[0], data.step3URL);
        plush_step3_page.clickcheckboxAllAccepts()
        plush_step3_page.clickAcceptButton();
        plush_step3_page.acceptPopUp(data.popUpAcceptData)
        plush_step3_page.clickConfirmButton();
        plush_finished_page.assertThenksTextAndOrderNumber(data.thxTextLastPage,data.stepLast4URL);
        plush_finished_page.getOrderNumberToFile(data.pathToOrderNumbersFile)


    })
  

})