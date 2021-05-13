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
            plush_pricing_list_page.visitPricingListPage()
            plush_pricing_list_page.clearCookies()

            // plush_pricing_list_page.acceptRodo()
            plush_pricing_list_page.scrollIntoPricingPlace(data.pricingList[0])
    })

    it("Price list for the provision of telecommunications services tariff 'PLUSH ABO III' (from 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[2],data.pricingList[2], data.pricingList[3],data.urlPricingList[0],0)
    })
    it("Price list of international calls and international roaming 4 (from 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[4],data.pricingList[4], data.pricingList[3],data.urlPricingList[1],1)
    })
    it("Telecommunications service contract",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[5],data.pricingList[5], data.pricingList[3],data.urlPricingList[2],2)
    })
    it("Telecommunications services contract - number transfer",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[6],data.pricingList[6], data.pricingList[3],data.urlPricingList[3],3)
    })
    it("Terms and Conditions of the Promotion 'In the UK as at home'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[7],data.pricingList[7], data.pricingList[3],data.urlPricingList[4],4)
    })
    it("PLUSH SUBSCRIPTION (as of 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[8],data.pricingList[8], data.pricingList[3],data.urlPricingList[5],5)
    })
    it("PLUSH SUBSCRIPTION 24 months (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[9],data.pricingList[9], data.pricingList[3],data.urlPricingList[6],6)
    })
    it("PLUSH SUBSCRIPTION 24 months (Outlet) (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[10],data.pricingList[10], data.pricingList[3],data.urlPricingList[7],7)
    })
    it("Packages in PLUSH SUBSCRIPTION 24 months (as of 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[11],data.pricingList[11], data.pricingList[3],data.urlPricingList[8],8)
    })
    it("Duets in Plush (dated 1.02.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[12],data.pricingList[12], data.pricingList[3],data.urlPricingList[9],9)
    })
    it("Tidal Music (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[13],data.pricingList[13], data.pricingList[3],data.urlPricingList[10],10)
    })
    it("HBO GO – PAKIET DANYCH 3 (z dnia 28.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[14],data.pricingList[14], data.pricingList[3],data.urlPricingList[11],11)
    })
    it("Appendix 2 to the Invoice: Terms and Conditions for the promotional sale of equipment (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[15],data.pricingList[15], data.pricingList[3],data.urlPricingList[12],12)
    })
    it("Appendix 2 to the Invoice: Terms and Conditions of promotional sale of equipment – for Regular Customers (dated 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[16],data.pricingList[16], data.pricingList[3],data.urlPricingList[13],13)
    })
    it("Terms and Conditions of the Promotion 'Plush ABO – SIM only (ONLINE STORE) 3' (as of 31.08.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[17],data.pricingList[17], data.pricingList[3],data.urlPricingList[14],14)
    })
    it("Terms and Conditions of the Promotion 'Plush ABO – ONLY SIM (DISTANCE SALE) 2'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[18],data.pricingList[18], data.pricingList[3],data.urlPricingList[15],15)
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – SIM only (ONLINE STORE) 3' (as of 31.08.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[19],data.pricingList[19], data.pricingList[3],data.urlPricingList[16],16)
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – SIM only (DISTANCE SALE) 2'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[20],data.pricingList[20], data.pricingList[3],data.urlPricingList[17],17)
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment' (as of 31.08.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[21],data.pricingList[21], data.pricingList[3],data.urlPricingList[18],18)
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment' (as of 11.03.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[22],data.pricingList[22], data.pricingList[3],data.urlPricingList[19],19)
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment (OUTLET)' (as of 31.08.2020)' (as of 11.03.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[23],data.pricingList[23], data.pricingList[3],data.urlPricingList[20],20)
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment (OUTLET)' (as of 11.03.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[24],data.pricingList[24], data.pricingList[3],data.urlPricingList[21],21)
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment (DISTANCE SALE)' (as of 18.06.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[25],data.pricingList[25], data.pricingList[3],data.urlPricingList[22],22)
    })
    it("Terms and Conditions of the Promotion 'Plush ABO 24 months – with equipment (DISTANCE SALE)' (as of 11.03.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[26],data.pricingList[26], data.pricingList[3],data.urlPricingList[23],23)
    })
    it("Terms and Conditions of the Online Store",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[27],data.pricingList[27], data.pricingList[3],data.urlPricingList[24],24)
    })
    it("Terms and conditions of the promotion 'Packages in Plush ABO 24 months 4'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[28],data.pricingList[28], data.pricingList[3],data.urlPricingList[25],25)
    })
    it("Terms and Conditions of the Promotion 'Duets in Plush' (as of 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[29],data.pricingList[29], data.pricingList[3],data.urlPricingList[26],26)
    })
    it("Terms and Conditions of the Promotion 'Duets in Plush ABO' (dated 19.03.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[30],data.pricingList[30], data.pricingList[3],data.urlPricingList[27],27)
    })
    it("Terms of Service 'HBO GO – DATA PACKAGE 3' (as of 01.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[31],data.pricingList[31], data.pricingList[3],data.urlPricingList[28],28)
    })
    it("Terms of Service 'HBO GO – DATA PACKAGE 3' (as of 14.02.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[32],data.pricingList[32], data.pricingList[3],data.urlPricingList[29],29)
    })
    it("TIDAL Terms of Service (as of 5.02.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[33],data.pricingList[33], data.pricingList[3],data.urlPricingList[30],30)
    })
    it("Terms and Conditions of the Promotion '120 GB Package' (as of 21.12.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[34],data.pricingList[34], data.pricingList[3],data.urlPricingList[31],31)
    })
    it("Terms and Conditions of the 'Lower Regulated Roaming Charges' Promotion Terms and Conditions",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[35],data.pricingList[35], data.pricingList[3],data.urlPricingList[32],32)
    })
    it("Terms and Conditions of the Promotion 'TikTok in Plush ABO' (as of 27.11.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[36],data.pricingList[36], data.pricingList[3],data.urlPricingList[33],33)
    })
    it("Terms and conditions of the promotion 'Video Package in Plush ABO 24 months 2' (as of 25.05.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[37],data.pricingList[37], data.pricingList[3],data.urlPricingList[34],34)
    })
    it("Green Invoice Regulations (as of 31.08.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[38],data.pricingList[38], data.pricingList[3],data.urlPricingList[35],35)
    })
    it("Telecommunications service contract",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[39],data.pricingList[39], data.pricingList[3],data.urlPricingList[36],36)
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO II' (from 01.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[40],data.pricingList[40], data.pricingList[3],data.urlPricingList[37],37)
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO II' (from 31.08.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[41],data.pricingList[41], data.pricingList[3],data.urlPricingList[38],38)
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 01.01.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[42],data.pricingList[42], data.pricingList[3],data.urlPricingList[39],39)
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 11.10.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[43],data.pricingList[43], data.pricingList[3],data.urlPricingList[40],40)
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 03.10.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[44],data.pricingList[44], data.pricingList[3],data.urlPricingList[41],41)
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 15.05.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[45],data.pricingList[45], data.pricingList[3],data.urlPricingList[42],42)
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 01.01.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[46],data.pricingList[46], data.pricingList[3],data.urlPricingList[43],43)
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO I' (from 10.10.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[47],data.pricingList[47], data.pricingList[3],data.urlPricingList[44],44)
    })
    it("Price list of the provision of telecommunications services tariff 'Plush ABO I' (from 25.05.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[48],data.pricingList[48], data.pricingList[3],data.urlPricingList[45],45)
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO' (from 01.01.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[49],data.pricingList[49], data.pricingList[3],data.urlPricingList[46],46)
    })
    it("Price list of the provision of telecommunications services tariff 'Plush ABO' (from 15.05.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[50],data.pricingList[50], data.pricingList[3],data.urlPricingList[47],47)
    })
    it("Price list of the provision of telecommunications services tariff 'Plush ABO' (from 01.01.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[51],data.pricingList[51], data.pricingList[3],data.urlPricingList[48],48)
    })
    it("Price list of the provision of telecommunications services tariff 'Plush ABO' (from 01.01.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[52],data.pricingList[52], data.pricingList[3],data.urlPricingList[49],49)
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO' (from 21.08.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[53],data.pricingList[53], data.pricingList[3],data.urlPricingList[50],50)
    })
    it("Price list for the provision of telecommunications services tariff 'Plush ABO' (from 31.03.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[54],data.pricingList[54], data.pricingList[3],data.urlPricingList[51],51)
    })
    it("European tariff for PostPaid 3 (from 21.12.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[55],data.pricingList[55], data.pricingList[3],data.urlPricingList[52],52)
    })
    it("European tariff for PostPaid 2 (from 01.01.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[56],data.pricingList[56], data.pricingList[3],data.urlPricingList[53],53)
    })
    it("European tariff for PostPaid 2 (from 01.01.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[57],data.pricingList[57], data.pricingList[3],data.urlPricingList[54],54)
    })
    it("European tariff for PostPaid 2 (from 25.05.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[58],data.pricingList[58], data.pricingList[3],data.urlPricingList[55],55)
    })
    it("European tariff for PostPaid 2 (from 01.01.2018)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[59],data.pricingList[59], data.pricingList[3],data.urlPricingList[56],56)
    })
    it("European tariff for PostPaid (from 15.06.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[60],data.pricingList[60], data.pricingList[3],data.urlPricingList[57],57)
    })
    it("Terms and Conditions of the Promotion 'Roaming in Plush ABO' (from 01.08.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[61],data.pricingList[61], data.pricingList[3],data.urlPricingList[58],58)
    })
    it("Terms and Conditions of the Promotion 'Roaming in Plush ABO' (from 15.06.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[62],data.pricingList[62], data.pricingList[3],data.urlPricingList[59],59)
    })
    it("Terms and Conditions of the Promotion 'Roaming in Plush ABO' (from 31.03.2017)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[63],data.pricingList[63], data.pricingList[3],data.urlPricingList[60],60)
    })
    it("Price List Tariff New Plush",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[64],data.pricingList[64], data.pricingList[3],data.urlPricingList[61],61)
    })
    it("Terms and Conditions of the Promotion 'Plush Internet' (from 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[65],data.pricingList[65], data.pricingList[3],data.urlPricingList[62],62)
    })
    it("Terms and Conditions of the Promotion 'Internet 5G from Plus' (from 20.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[66],data.pricingList[66], data.pricingList[3],data.urlPricingList[63],63)
    })
    it("Price list of telecommunications equipment/other goods offered in promotions of type PLUSH INTERNET",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[67],data.pricingList[67], data.pricingList[3],data.urlPricingList[64],64)
    })
    it("Terms and Conditions of the Promotion 'Plush Internet LTE - SIM only' (from 25.10.2019)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[68],data.pricingList[68], data.pricingList[3],data.urlPricingList[65],65)
    })
    it("Terms and Conditions of the Promotion 'Plush Internet LTE with equipment for 24/36 installments with a starting fee' (from 1.04.2020)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[69],data.pricingList[69], data.pricingList[3],data.urlPricingList[66],66)
    })
    it("Terms and Conditions of the Promotion 'Internet 5G from Plus' (as of 13.01.2021)",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[70],data.pricingList[70], data.pricingList[3],data.urlPricingList[67],67)
    })
    it("Price List Tariff New Plush",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[71],data.pricingList[71], data.pricingList[3],data.urlPricingList[68],68)
    })
    it("Terms and Conditions of the Promotion 'Plush Internet LTE - SIM only' - valid until 25.10.2019",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[72],data.pricingList[72], data.pricingList[3],data.urlPricingList[69],69)
    })
    it("Terms and Conditions of the Promotion 'Plush Internet LTE with equipment for 24/36 installments with start fee' - valid until 25.10.2019",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[73],data.pricingList[73], data.pricingList[3],data.urlPricingList[70],70)
    })
    it("Annex 1 to the Terms and Conditions of the promotion 'Plush Internet LTE with equipment for 24/36 installments with a starting fee' - valid until 25.10.2019",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[74],data.pricingList[74], data.pricingList[3],data.urlPricingList[71],71)
    })
    it("Terms and Conditions of the Promotion 'Plush Internet LTE with equipment for 24/36 installments with a starting fee' - valid until 25.06.2019",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[75],data.pricingList[75], data.pricingList[3],data.urlPricingList[72],72)
    })
    it("TAppendix 1 to the Terms and Conditions of the promotion 'Plush Internet LTE with equipment for 24/36 installments with a starting fee'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[76],data.pricingList[76], data.pricingList[3],data.urlPricingList[73],73)
    })
    it("Price List Tariff New Plush",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[77],data.pricingList[77], data.pricingList[3],data.urlPricingList[74],74)
    })
    it("Price list of international calls and international roaming",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[78],data.pricingList[78], data.pricingList[3],data.urlPricingList[75],75)
    })
    it("PLUSH Tariff Price List per Card",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[79],data.pricingList[79], data.pricingList[3],data.urlPricingList[76],76)
    })
    it("Price list plush tariff without limit- contract after 12.02.2015.",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[80],data.pricingList[80], data.pricingList[3],data.urlPricingList[77],77)
    })
    it("Price list Plush tariff without limit",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[81],data.pricingList[81], data.pricingList[3],data.urlPricingList[78],78)
    })
    it("Terms and Conditions of the Promotion 'Internet, calls without limit'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[82],data.pricingList[82], data.pricingList[3],data.urlPricingList[79],79)
    })
    it("Terms and Conditions of the Promotion 'Internet, Calls, SMS, MMS without limit'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[83],data.pricingList[83], data.pricingList[3],data.urlPricingList[80],80)
    })
    it("Terms and Conditions of the Promotion 'Internet, SMS, MMS without limit'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[84],data.pricingList[84], data.pricingList[3],data.urlPricingList[81],81)
    })
    it("Terms and Conditions of the '5 GB Package' Promotion",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[85],data.pricingList[85], data.pricingList[3],data.urlPricingList[82],82)
    })
    it("Terms and Conditions of the 'Video Package' Promotion",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[86],data.pricingList[86], data.pricingList[3],data.urlPricingList[83],83)
    })
    it("Terms and Conditions of the Promotion 'Year of Account Ness in Plush'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[87],data.pricingList[87], data.pricingList[3],data.urlPricingList[84],84)
    })
    it("EU Packages Promotion Terms and Conditions",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[88],data.pricingList[88], data.pricingList[3],data.urlPricingList[85],85)
    })
    it("Terms and Conditions of the Promotion 'Change fare to New Plush'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[89],data.pricingList[89], data.pricingList[3],data.urlPricingList[86],86)
    })
    it("Terms and Conditions of the 'Starters in The New Plush Fare' Promotion",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[90],data.pricingList[90], data.pricingList[3],data.urlPricingList[87],87)
    })
    it("Terms and Conditions of the '120 GB Package' Promotion",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[91],data.pricingList[91], data.pricingList[3],data.urlPricingList[88],88)
    })
    it("Terms and conditions of the promotion 'Internet Packages in Plush'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[92],data.pricingList[92], data.pricingList[3],data.urlPricingList[89],89)
    })
    it("Terms and Conditions of the 'Cheaper to Ukraine' Promotion",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[93],data.pricingList[93], data.pricingList[3],data.urlPricingList[90],90)
    })
    it("Terms and conditions of the 'Recommend Plush' promotion",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[94],data.pricingList[94], data.pricingList[3],data.urlPricingList[91],91)
    })
    it("Terms and Conditions of the Promotion 'SIM card for 0 PLN per start for transferring a number from another network'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[95],data.pricingList[95], data.pricingList[3],data.urlPricingList[92],92)
    })
    it("Terms and Conditions of the Promotion 'SMS calls without limit of 15 GB and 1000 minutes to Ukraine'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[96],data.pricingList[96], data.pricingList[3],data.urlPricingList[93],93)
    })
    it("Terms and Conditions of the Promotion 'Plush Internet Promo BS on starter'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[97],data.pricingList[97], data.pricingList[3],data.urlPricingList[94],94)
    })
    it("Terms and Conditions of the Promotion 'Plush Internet Promo BS'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[98],data.pricingList[98], data.pricingList[3],data.urlPricingList[95],95)
    })
    it("Terms and Conditions of the Promotion Without Limit and 15 GB",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[99],data.pricingList[99], data.pricingList[3],data.urlPricingList[96],96)
    })
    it("Terms and Conditions of the Promotion 'Discount 100% for 3 months'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[100],data.pricingList[100], data.pricingList[3],data.urlPricingList[97],97)
    })
    it("Terms and Conditions of the Promotion 'Year of Account Ness in Plush'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[101],data.pricingList[101], data.pricingList[3],data.urlPricingList[98],98)
    })
    it("Terms and Conditions of the 'No Limit Calls' Promotion",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[102],data.pricingList[102], data.pricingList[3],data.urlPricingList[99],99)
    })
    it("Terms and Conditions of the Promotion 'Calls, SMS, MMS without limit'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[103],data.pricingList[103], data.pricingList[3],data.urlPricingList[100],100)
    })
    it("Terms and Conditions of the Promotion 'SMS, MMS without limit'",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[104],data.pricingList[104], data.pricingList[3],data.urlPricingList[101],101)
    }) 
    it("Surf at Night Promotion Terms and Conditions",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocument(data.pricingList[1],data.pricingList[105],data.pricingList[105], data.pricingList[3],data.urlPricingList[102],102)
    }) 
    it("Terms and Conditions of the '5 GB Package' Promotion",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[106],data.pricingList[106], data.pricingList[3],data.urlPricingList[103],103)
    }) 
    it("Terms and Conditions of the 'Video Package' Promotion",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[107],data.pricingList[107], data.pricingList[3],data.urlPricingList[104],104)
    }) 
    it("Tariff price list NEW PLUSH",()=>{
        plush_pricing_list_page.checkedFirstActualPricingDocumentContainAssertion(data.pricingList[1],data.pricingList[108],data.pricingList[108], data.pricingList[3],data.urlPricingList[105],105)
    }) 
})