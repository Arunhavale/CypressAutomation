/// <reference types="Cypress"/>
describe("My Third suite",function(){
    
it("My first test",function(){


    //alerts and popups
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click({force:true})
cy.url().should('include','top')


})
})