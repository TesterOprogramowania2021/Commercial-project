/// <reference  types="Cypress" />

import Plush_pricing_list_page from "../../../support/plush/Plush_pricing_list_page_9.js";




describe("Current price lists", () =>{ 

    const plush_pricing_list_page = new Plush_pricing_list_page();

    before(() => {
        cy.fixture("plushData").then(data => {
            globalThis.data = data;
        })
    })
    beforeEach(()=>{
            plush_pricing_list_page.clearCookies()
            plush_pricing_list_page.visitPricingListPage()
            plush_pricing_list_page.acceptRodo()
            plush_pricing_list_page.scrollIntoPricingPlace(data.pricingList[0])
    })

    it("Price list for the provision of telecommunications services tariff 'PLUSH ABO III' (from 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[2],data.pricingList[2], data.pricingList[3],data.urlPricingList[0],data.eq[0])
    })
    it("Price list of international calls and international roaming 4 (from 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[4],data.pricingList[4], data.pricingList[3],data.urlPricingList[1],data.eq[1])
    })
    it("Telecommunications service contract",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[5],data.pricingList[5], data.pricingList[3],data.urlPricingList[2],data.eq[2])
    })
    it("Telecommunications services contract - number transfer",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[6],data.pricingList[6], data.pricingList[3],data.urlPricingList[3],data.eq[3])
    })
    it("Terms and Conditions of the Promotion 'In the UK as at home'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[7],data.pricingList[7], data.pricingList[3],data.urlPricingList[4],data.eq[4])
    })
    it("PLUSH SUBSCRIPTION (as of 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[8],data.pricingList[8], data.pricingList[3],data.urlPricingList[5],data.eq[5])
    })
    it("PLUSH SUBSCRIPTION 24 months (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[9],data.pricingList[9], data.pricingList[3],data.urlPricingList[6],data.eq[6])
    })
    it("PLUSH SUBSCRIPTION 24 months (Outlet) (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[10],data.pricingList[10], data.pricingList[3],data.urlPricingList[7],data.eq[7])
    })
    it("Packages in PLUSH SUBSCRIPTION 24 months (as of 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[11],data.pricingList[11], data.pricingList[3],data.urlPricingList[8],data.eq[8])
    })
    it("Duets in Plush (dated 1.02.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[12],data.pricingList[12], data.pricingList[3],data.urlPricingList[9],data.eq[9])
    })
    it("Tidal Music (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[13],data.pricingList[13], data.pricingList[3],data.urlPricingList[10],data.eq[10])
    })
    it("HBO GO – PAKIET DANYCH 3 (z dnia 28.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[14],data.pricingList[14], data.pricingList[3],data.urlPricingList[11],data.eq[11])
    })
    it("Appendix 2 to the Invoice: Terms and Conditions for the promotional sale of equipment (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[15],data.pricingList[15], data.pricingList[3],data.urlPricingList[12],data.eq[12])
    })
    it("Appendix 2 to the Invoice: Terms and Conditions of promotional sale of equipment – for Regular Customers (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[16],data.pricingList[16], data.pricingList[3],data.urlPricingList[13],data.eq[13])
    })
    it("Terms and Conditions of the Promotion 'Plush ABO – SIM only (ONLINE STORE) 3' (as of 31.08.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[17],data.pricingList[17], data.pricingList[3],data.urlPricingList[14],data.eq[14])
    })
    it("Terms and Conditions of the Promotion 'Plush ABO – ONLY SIM (DISTANCE SALE) 2'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[18],data.pricingList[18], data.pricingList[3],data.urlPricingList[15],data.eq[15])
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – SIM only (ONLINE STORE) 3' (as of 31.08.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[19],data.pricingList[19], data.pricingList[3],data.urlPricingList[16],data.eq[16])
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – SIM only (DISTANCE SALE) 2'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[20],data.pricingList[20], data.pricingList[3],data.urlPricingList[17],data.eq[17])
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment' (as of 31.08.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[21],data.pricingList[21], data.pricingList[3],data.urlPricingList[18],data.eq[18])
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment' (as of 11.03.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[22],data.pricingList[22], data.pricingList[3],data.urlPricingList[19],data.eq[19])
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment (OUTLET)' (as of 31.08.2020)' (as of 11.03.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[23],data.pricingList[23], data.pricingList[3],data.urlPricingList[20],data.eq[20])
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment (OUTLET)' (as of 11.03.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[24],data.pricingList[24], data.pricingList[3],data.urlPricingList[21],data.eq[21])
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment (DISTANCE SALE)' (as of 18.06.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[25],data.pricingList[25], data.pricingList[3],data.urlPricingList[22],data.eq[22])
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment (DISTANCE SALE)' (as of 11.03.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[26],data.pricingList[26], data.pricingList[3],data.urlPricingList[23],data.eq[23])
    })
    it("Terms and Conditions of the Online Store",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[27],data.pricingList[27], data.pricingList[3],data.urlPricingList[24],data.eq[24])
    })
    it("Terms and conditions of the promotion 'Packages in Plush ABO 24 months 4'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[28],data.pricingList[28], data.pricingList[3],data.urlPricingList[25],data.eq[25])
    })
    it("Terms and Conditions of the Promotion 'Duets in Plush' (as of 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[29],data.pricingList[29], data.pricingList[3],data.urlPricingList[26],data.eq[26])
    })
    it("Terms and Conditions of the Promotion 'Duets in Plush ABO' (dated 19.03.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[30],data.pricingList[30], data.pricingList[3],data.urlPricingList[27],data.eq[27])
    })
    it("Terms of Service 'HBO GO – DATA PACKAGE 3' (as of 01.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[31],data.pricingList[31], data.pricingList[3],data.urlPricingList[28],data.eq[28])
    })
    it("Terms of Service 'HBO GO – DATA PACKAGE 3' (as of 14.02.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[32],data.pricingList[32], data.pricingList[3],data.urlPricingList[29],data.eq[29])
    })
    it("TIDAL Terms of Service (as of 5.02.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[33],data.pricingList[33], data.pricingList[3],data.urlPricingList[30],data.eq[30])
    })
    it("Terms and Conditions of the Promotion '120 GB Package' (as of 21.12.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[34],data.pricingList[34], data.pricingList[3],data.urlPricingList[31],data.eq[31])
    })
    it("Terms and Conditions of the 'Lower Regulated Roaming Charges' Promotion Terms and Conditions",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[35],data.pricingList[35], data.pricingList[3],data.urlPricingList[32],data.eq[32])
    })
    it("Terms and Conditions of the Promotion 'TikTok in Plush ABO' (as of 27.11.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[36],data.pricingList[36], data.pricingList[3],data.urlPricingList[33],data.eq[33])
    })
    it("Terms and conditions of the promotion 'Video Package in Plush ABO 24 months 2' (as of 25.05.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[37],data.pricingList[37], data.pricingList[3],data.urlPricingList[34],data.eq[34])
    })
    it("Green Invoice Regulations (as of 31.08.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[38],data.pricingList[38], data.pricingList[3],data.urlPricingList[35],data.eq[35])
    })
    it("Telecommunications service contract",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[39],data.pricingList[39], data.pricingList[3],data.urlPricingList[36],data.eq[36])
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO II' (from 01.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[40],data.pricingList[40], data.pricingList[3],data.urlPricingList[37],data.eq[37])
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO II' (from 31.08.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[41],data.pricingList[41], data.pricingList[3],data.urlPricingList[38],data.eq[38])
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 01.01.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[42],data.pricingList[42], data.pricingList[3],data.urlPricingList[39],data.eq[39])
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 11.10.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[43],data.pricingList[43], data.pricingList[3],data.urlPricingList[40],data.eq[40])
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 03.10.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[44],data.pricingList[44], data.pricingList[3],data.urlPricingList[41],data.eq[41])
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 15.05.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[45],data.pricingList[45], data.pricingList[3],data.urlPricingList[42],data.eq[42])
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 01.01.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[46],data.pricingList[46], data.pricingList[3],data.urlPricingList[43],data.eq[43])
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 10.10.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[47],data.pricingList[47], data.pricingList[3],data.urlPricingList[44],data.eq[44])
    })
    it("Price list of the provision of telecommunications services tariff 'Plush ABO I' (from 25.05.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[48],data.pricingList[48], data.pricingList[3],data.urlPricingList[45],data.eq[45])
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO' (from 01.01.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[49],data.pricingList[49], data.pricingList[3],data.urlPricingList[46],data.eq[46])
    })
    it("Price list of the provision of telecommunications services tariff 'Plush ABO' (from 15.05.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[50],data.pricingList[50], data.pricingList[3],data.urlPricingList[47],data.eq[47])
    })
    it("Price list of the provision of telecommunications services tariff 'Plush ABO' (from 01.01.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[51],data.pricingList[51], data.pricingList[3],data.urlPricingList[48],data.eq[48])
    })
    it("Price list of the provision of telecommunications services tariff 'Plush ABO' (from 01.01.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[52],data.pricingList[52], data.pricingList[3],data.urlPricingList[49],data.eq[49])
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO' (from 21.08.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[53],data.pricingList[53], data.pricingList[3],data.urlPricingList[50],data.eq[50])
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO' (from 31.03.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[54],data.pricingList[54], data.pricingList[3],data.urlPricingList[51],data.eq[51])
    })
    it("European tariff for PostPaid 3 (from 21.12.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[55],data.pricingList[55], data.pricingList[3],data.urlPricingList[52],data.eq[52])
    })
    it("European tariff for PostPaid 2 (from 01.01.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[56],data.pricingList[56], data.pricingList[3],data.urlPricingList[53],data.eq[53])
    })
    it("European tariff for PostPaid 2 (from 01.01.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[57],data.pricingList[57], data.pricingList[3],data.urlPricingList[54],data.eq[54])
    })
    it("European tariff for PostPaid 2 (from 25.05.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[58],data.pricingList[58], data.pricingList[3],data.urlPricingList[55],data.eq[55])
    })
    it("European tariff for PostPaid 2 (from 01.01.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[59],data.pricingList[59], data.pricingList[3],data.urlPricingList[56],data.eq[56])
    })
    it("European tariff for PostPaid (from 15.06.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[60],data.pricingList[60], data.pricingList[3],data.urlPricingList[57],data.eq[57])
    })
    it("Terms and Conditions of the Promotion 'Roaming in Plush ABO' (from 01.08.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[61],data.pricingList[61], data.pricingList[3],data.urlPricingList[58],data.eq[58])
    })
    it("Terms and Conditions of the Promotion 'Roaming in Plush ABO' (from 15.06.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[62],data.pricingList[62], data.pricingList[3],data.urlPricingList[59],data.eq[59])
    })
    it("Terms and Conditions of the Promotion 'Roaming in Plush ABO' (from 31.03.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[63],data.pricingList[63], data.pricingList[3],data.urlPricingList[60],data.eq[60])
    })
    it("Price List Tariff New Plush",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[64],data.pricingList[64], data.pricingList[3],data.urlPricingList[61],data.eq[61])
    })
    it("Terms and Conditions of the Promotion 'Plush Internet' (from 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[65],data.pricingList[65], data.pricingList[3],data.urlPricingList[62],data.eq[62])
    })
    it("Terms and Conditions of the Promotion 'Internet 5G from Plus' (from 20.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[66],data.pricingList[66], data.pricingList[3],data.urlPricingList[63],data.eq[63])
    })
    it("Price list of telecommunications equipment/other goods offered in promotions of type PLUSH INTERNET",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[67],data.pricingList[67], data.pricingList[3],data.urlPricingList[64],data.eq[64])
    })
    it("Terms and Conditions of the Promotion 'Plush Internet LTE - SIM only' (from 25.10.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[68],data.pricingList[68], data.pricingList[3],data.urlPricingList[65],data.eq[65])
    })
    it("Terms and Conditions of the Promotion 'Plush Internet LTE with equipment for 24/36 installments with a starting fee' (from 1.04.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[69],data.pricingList[69], data.pricingList[3],data.urlPricingList[66],data.eq[66])
    })
    it("Terms and Conditions of the Promotion 'Internet 5G from Plus' (as of 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[70],data.pricingList[70], data.pricingList[3],data.urlPricingList[67],data.eq[67])
    })
    it("Price List Tariff New Plush",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[71],data.pricingList[71], data.pricingList[3],data.urlPricingList[68],data.eq[68])
    })
    it("Terms and Conditions of the Promotion 'Plush Internet LTE - SIM only' - valid until 25.10.2019",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[72],data.pricingList[72], data.pricingList[3],data.urlPricingList[69],data.eq[69])
    })
    it("Terms and Conditions of the Promotion 'Plush Internet LTE with equipment for 24/36 installments with start fee' - valid until 25.10.2019",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[73],data.pricingList[73], data.pricingList[3],data.urlPricingList[70],data.eq[70])
    })
    it("Annex 1 to the Terms and Conditions of the promotion 'Plush Internet LTE with equipment for 24/36 installments with a starting fee' - valid until 25.10.2019",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[74],data.pricingList[74], data.pricingList[3],data.urlPricingList[71],data.eq[71])
    })
    it("Terms and Conditions of the Promotion 'Plush Internet LTE with equipment for 24/36 installments with a starting fee' - valid until 25.06.2019",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[75],data.pricingList[75], data.pricingList[3],data.urlPricingList[72],data.eq[72])
    })
    it.only("TAppendix 1 to the Terms and Conditions of the promotion 'Plush Internet LTE with equipment for 24/36 installments with a starting fee'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[76],data.pricingList[76], data.pricingList[3],data.urlPricingList[73],data.eq[73])
    })
})