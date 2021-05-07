// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Jak sama nazwa metody wskazuje, metoda czyści pliki cookies oraz akceptuje regulamin RODO
Cypress.Commands.add("clearCookiesAndLocalStages",()=>{
    cy.clearCookies()
    cy.clearLocalStorage();
})
Cypress.Commands.add("acceptRodo",button=>{
    cy.get(button).click();
})
Cypress.Commands.add("verifyURLadress",urlPath=>{
    cy.url().should("contain",urlPath)
    // cy.url().then(($url) => {
    //     if($url.includes(urlPath)) {
    //         expect($url).is.contain(urlPath)
    //     } else  {
    //         cy.log("Wrong URL adress!!!")
    //       }
    // })

})
Cypress.Commands.add("validate200ResponseCode",(url)=>{
    let result;
    result = cy.request(url)
    result.its("status").should("equal",200)
    
})





import 'cypress-wait-until';
import 'cypress-file-upload';