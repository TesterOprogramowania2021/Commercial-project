/// <reference  types="Cypress" />


import Plush_main_page from "../../../support/plush/smoke-objects/Plush_main_page_1"
import Plush_phones_pages from "../../../support/plush/smoke-objects/Plush_phones_page_2"
import Plush_phone_page from "../../../support/plush/smoke-objects/Plush_phone_page_3";
import Plush_person_formulage_page from "../../../support/plush/smoke-objects/Plush_person_formulage_page_4";
import Plush_adress_formulage_page from "../../../support/plush/smoke-objects/Plush_adress_formulage_page_5";
import Plush_step3_page from "../../../support/plush/smoke-objects/Plush_step3_page_6";
import Plush_finished_page from "../../../support/plush/smoke-objects/Plush_finished_page_7";


describe("Secend part of E2E plush tests main page", () => {


    const plush_main_page = new Plush_main_page();
    const plush_phones_pages = new Plush_phones_pages();
    const plush_phone_page = new Plush_phone_page();
    const plush_person_formulage_page = new Plush_person_formulage_page();
    const plush_adress_formulage_page = new Plush_adress_formulage_page();
    const plush_step3_page = new Plush_step3_page()
    const plush_finished_page = new Plush_finished_page();



    //dostęp do danych z pliku plushData
    before(() => {
        cy.fixture("plushData").then(data => {
            globalThis.data = data;
        })
    })
    //otwarcie głównego adresu URL plush oraz ackceptacja plików cookies
    beforeEach(() => {

        plush_main_page.clearCookies();
        plush_main_page.getPlushMainPage(data.urlAdress);
        plush_main_page.acceptRodo();

        // metoda akceptująca wyjątek     
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });


    })
    it("Ind/Voice/ACQ/Device/Abo/24months", () => {
        plush_main_page.clickOffertFirstRow(data.textGetPhone);
        plush_phones_pages.clickButtonNewNumber2();
        plush_phones_pages.checkedRadiobutton30zlSelection(data.radioButton30zl);
        plush_phones_pages.clickCheckedButtonPhone(data.checked, data.phoneURL)
        plush_phone_page.clickGetNumberButton(data.step1URL);
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_person_formulage_page.fillFormulage(data.userDataFormulage[0], data.userDataFormulage[1], data.userDataFormulage[2], data.userDataFormulage[3], data.userDataFormulage[4], data.userDataFormulage[5], data.step1URL, data.prices[0])
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_adress_formulage_page.fillAdressFormulage(data.adressDataFormulage[0], data.adressDataFormulage[1], data.adressDataFormulage[2], data.adressDataFormulage[3], data.adressDataFormulage[4]);
        plush_adress_formulage_page.selectDocument(data.documentName[0])
        plush_adress_formulage_page.clickButtonNext()
        plush_step3_page.checkedMainPrice(data.prices[0], data.step3URL);
        plush_step3_page.clickcheckboxAllAccepts()
        plush_step3_page.clickAcceptButton();
        plush_step3_page.acceptPopUp(data.popUpAcceptData)
        plush_step3_page.clickConfirmButton();
        plush_finished_page.assertThenksTextAndOrderNumber(data.thxTextLastPage, data.stepLast4URL);
        plush_finished_page.getOrderNumberToFile(data.pathToOrderNumbersFile)
    })
    it("Ind/Voice/ACQ/Simo/Abo/24months", () => {
        plush_main_page.clickOffertFirstRow(data.textNoPhone);
        plush_main_page.clickOptionWhatYouNeed(data.textNewNumber);
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_person_formulage_page.fillFormulage(data.userDataFormulage[0], data.userDataFormulage[1], data.userDataFormulage[2], data.userDataFormulage[3], data.userDataFormulage[4], data.userDataFormulage[5], data.step1URL)
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_adress_formulage_page.fillAdressFormulage(data.adressDataFormulage[0], data.adressDataFormulage[1], data.adressDataFormulage[2], data.adressDataFormulage[3], data.adressDataFormulage[4]);
        plush_adress_formulage_page.clickButtonNext();
        plush_step3_page.checkedMainPrice(data.prices[0], data.step3URL);
        plush_step3_page.clickcheckboxAllAccepts()
        plush_step3_page.clickAcceptButton();
        plush_step3_page.acceptPopUp(data.popUpAcceptDataNoDevice)
        plush_step3_page.clickConfirmButton();
        plush_finished_page.assertThenksTextAndOrderNumber(data.thxTextLastPage, data.stepLast4URL);
        plush_finished_page.getOrderNumberToFile(data.pathToOrderNumbersFile)

    })
    it("Ind/Voice/ACQ/Simo/Mix/IndeterminateTime", () => {
        plush_main_page.clickOffert30zlNoLimit(data.textNoPhone);
        plush_main_page.clickOptionWhatYouNeed(data.textNewNumber);
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_person_formulage_page.fillFormulage(data.userDataFormulage[0], data.userDataFormulage[1], data.userDataFormulage[2], data.userDataFormulage[3], data.userDataFormulage[4], data.userDataFormulage[5], data.step1URL)
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_adress_formulage_page.fillAdressFormulage(data.adressDataFormulage[0], data.adressDataFormulage[1], data.adressDataFormulage[2], data.adressDataFormulage[3], data.adressDataFormulage[4]);
        plush_adress_formulage_page.clickButtonNext();
        plush_step3_page.checkedMainPrice(data.prices[0], data.step3URL);
        plush_step3_page.clickcheckboxAllAccepts()
        plush_step3_page.clickAcceptButton();
        plush_step3_page.acceptPopUp(data.popUpAcceptDataNoDevice)
        plush_step3_page.clickConfirmButton();
        plush_finished_page.assertThenksTextAndOrderNumber(data.thxTextLastPage, data.stepLast4URL);
        plush_finished_page.getOrderNumberToFile(data.pathToOrderNumbersFile)
    })
    it("Ind/Voice/MNP/Device/Abo/24months", () => {
        plush_main_page.clickOffertFirstRow(data.textGetPhone)
        plush_phones_pages.clickButtonIwontMoveMobileNumber(data.iWontMoveNumber)
        plush_phones_pages.checkedRadiobutton30zlSelection(data.radioButton30zl)
        plush_phones_pages.clickCheckedButtonPhone(data.checked, data.phoneURL)
        plush_phone_page.clickGetNumberButton(data.step1URL)
        plush_person_formulage_page.setOTPNumber(data.otpNumber)
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_person_formulage_page.setAndAcceptPassword(data.uatPassword)
        plush_person_formulage_page.setPopUPWebOperator(data.webOperators[2])
        plush_person_formulage_page.setPopUPWebOperatorService(data.services[1])
        plush_person_formulage_page.setNumberDateTransfer2(data.cardDataTransfer)
        plush_person_formulage_page.fillFormulage(data.userDataFormulage[0], data.userDataFormulage[1], data.userDataFormulage[2], data.userDataFormulage[3], data.userDataFormulage[4], data.userDataFormulage[5], data.step1URL)
        plush_adress_formulage_page.fillAdressFormulage(data.adressDataFormulage[0], data.adressDataFormulage[1], data.adressDataFormulage[2], data.adressDataFormulage[3], data.adressDataFormulage[4])
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_adress_formulage_page.selectDocument(data.documentName[2])
        plush_adress_formulage_page.fillDocumentFormulageContractOrder(data.userDataFormulage[0], data.userDataFormulage[3])
        plush_adress_formulage_page.clickButtonNext()
        plush_step3_page.checkedMainPrice(data.prices[0], data.step3URL);
        plush_step3_page.clickcheckboxAllAccepts()
        plush_step3_page.clickAcceptButton()
        plush_step3_page.acceptPopUp(data.popUpAcceptData)
        plush_step3_page.clickConfirmButton();
        plush_finished_page.assertThenksTextAndOrderNumber(data.thxTextLastPage, data.stepLast4URL)
        plush_finished_page.getOrderNumberToFile(data.pathToOrderNumbersFile)
    })
    it.only("Placing an order for an MNP in the offer for 30 PLN /month without device", () => {
        plush_main_page.clickOffertFirstRow(data.textNoPhone)
        plush_main_page.clickOptionWhatYouNeed(data.iwontNewNumberInPlush)
        plush_person_formulage_page.setOTPNumber(data.otpNumber)
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_person_formulage_page.setAndAcceptPassword(data.uatPassword)
        plush_person_formulage_page.setPopUPWebOperator(data.webOperators[6])
        plush_person_formulage_page.setPopUPWebOperatorService(data.services[0])
        plush_person_formulage_page.setNumberDateTransfer(data.latPromotionTime)
        plush_person_formulage_page.fillFormulage(data.userDataFormulage[0], data.userDataFormulage[1], data.userDataFormulage[2], data.userDataFormulage[3], data.userDataFormulage[4], data.userDataFormulage[5], data.step1URL)
        plush_adress_formulage_page.fillAdressFormulage(data.adressDataFormulage[0], data.adressDataFormulage[1], data.adressDataFormulage[2], data.adressDataFormulage[3], data.adressDataFormulage[4])
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_adress_formulage_page.clickButtonNext()
        plush_step3_page.checkedMainPrice(data.prices[0], data.step3URL)
        plush_step3_page.clickcheckboxAllAccepts()
        plush_step3_page.clickAcceptButton()
        plush_step3_page.acceptPopUp(data.popUpAcceptDataNoDevice)
        plush_step3_page.clickConfirmButton()
        plush_finished_page.assertThenksTextAndOrderNumber(data.thxTextLastPage, data.stepLast4URL)
        plush_finished_page.getOrderNumberToFile(data.pathToOrderNumbersFile)

    })
    it("Placing an order for an MNP in the offer for 30 PLN /month without device", () => {
        plush_main_page.clickOffert30zlNoLimit(data.textNoPhone);
        plush_main_page.clickOptionWhatYouNeed(data.iwontNewNumberInPlush);
        plush_person_formulage_page.setOTPNumber(data.otpNumber)
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_person_formulage_page.setAndAcceptPassword(data.uatPassword)
        plush_person_formulage_page.setPopUPWebOperator(data.webOperators[6])
        plush_person_formulage_page.setPopUPWebOperatorService(data.services[0])
        plush_person_formulage_page.setNumberDateTransfer(data.latPromotionTime)
        plush_person_formulage_page.fillFormulage(data.userDataFormulage[0], data.userDataFormulage[1], data.userDataFormulage[2], data.userDataFormulage[3], data.userDataFormulage[4], data.userDataFormulage[5], data.step1URL)
        plush_adress_formulage_page.fillAdressFormulage(data.adressDataFormulage[0], data.adressDataFormulage[1], data.adressDataFormulage[2], data.adressDataFormulage[3], data.adressDataFormulage[4])
        plush_person_formulage_page.verifyPriceOnFormulage(data.prices[0])
        plush_adress_formulage_page.clickButtonNext()
        plush_step3_page.checkedMainPrice(data.prices[0], data.step3URL)
        plush_step3_page.clickcheckboxAllAccepts()
        plush_step3_page.clickAcceptButton()
        plush_step3_page.acceptPopUp(data.popUpAcceptDataNoDevice)
        plush_step3_page.clickConfirmButton()
        plush_finished_page.assertThenksTextAndOrderNumber(data.thxTextLastPage, data.stepLast4URL)
        plush_finished_page.getOrderNumberToFile(data.pathToOrderNumbersFile)

    })



})