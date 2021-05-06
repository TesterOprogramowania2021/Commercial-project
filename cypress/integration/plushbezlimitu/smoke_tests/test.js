describe("text", ()=>{
    it("test ",()=>{


        cy.visit("https://www.gostynin.pl/", {timeout:20000})
        cy.get('#menuMainWrapper > .menu > :nth-child(1) > .item0 > span').then((text1)=>{
            cy.writeFile("cypress/fixtures/test.txt",text1.text())


        })
    })
})