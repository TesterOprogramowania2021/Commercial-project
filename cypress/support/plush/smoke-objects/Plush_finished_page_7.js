/// <reference  types="Cypress" />

const finishedPageSelectors = {

    thenxText: "h1[class='title']",
    orderNumber: "span[class='order-number']",
    logoImage: ".logo > img"




}

class Plush_finished_page {


    assertThenksTextAndOrderNumber(thenxTextData, url) {
        cy.verifyURLadress(url, { timeout: 15000 })
        cy
            .get(finishedPageSelectors.logoImage, { timeout: 100000 })
            .should("be.visible")
            .get(finishedPageSelectors.thenxText, { timeout: 200000 })
            .contains(thenxTextData)
            .get(finishedPageSelectors.orderNumber, { timeout: 100000 })
            .should("be.visible", { timeout: 100000 })
            .verifyURLadress(url);

    }
    getOrderNumberToFile(pathToFile) {
        cy.get(finishedPageSelectors.orderNumber).then((text1) => {
            let d = new Date();
            let e = new Date();
            cy.writeFile(pathToFile, text1.text() + "  " + d.toLocaleDateString() + "/" + e.toLocaleTimeString() + "\n", { flag: "a+" })


        })
    }

    //




}
export default Plush_finished_page;