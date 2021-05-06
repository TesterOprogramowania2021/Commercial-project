/// <reference  types="Cypress" />

const phonePageSelectors = {

    buttonGetNewNumber: "#move-id",
    logoImage: ".logo > img",
    buttonMoveNewNumber: "#move-id",
   



}

class Plush_phone_page {
    

    clickGetNumberButton(url) {
        // cy.verifyURLadress(data.step1URL);
        cy.get(phonePageSelectors.buttonGetNewNumber,{ timeout: 15000 }).click({force:true})
        cy.get(phonePageSelectors.logoImage, {timeout:10000}).should("be.visible")
         cy.reload({timeout:5000})
  
    }
    // clickMoveNumberButton(url) {
        
    //     cy.get(phonePageSelectors.buttonGetNewNumber,{ timeout: 15000 }).click({force:true})
    //     cy.get(phonePageSelectors.logoImage, {timeout:10000}).should("be.visible")
  
    // }
  

  



}
export default Plush_phone_page;