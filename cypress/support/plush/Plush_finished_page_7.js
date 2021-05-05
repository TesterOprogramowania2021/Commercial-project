/// <reference  types="Cypress" />

const finishedPageSelectors = {

    thenxText: "h1[class='title']",
    orderNumber: "span[class='order-number']",
    logoImage: ".logo > img"
   



}

class Plush_finished_page {
    

    assertThenksTextAndOrderNumber(thenxTextData,url) {
        // cy.verifyURLadress(url)
        cy.get(finishedPageSelectors.logoImage, {timeout:100000}).should("be.visible")
        cy.get(finishedPageSelectors.thenxText, {timeout: 10000})
        .contains(thenxTextData);
        cy.get(finishedPageSelectors.orderNumber).first().should("be.visible");
        cy.verifyURLadress(url)

    }
  

  



}
export default Plush_finished_page;