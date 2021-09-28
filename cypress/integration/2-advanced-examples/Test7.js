/// <reference types="Cypress"/>
describe("My Third suite",function(){
    
it("My first test",function(){


    //alerts and popups
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#opentab').then(function(e1)
{
   const url = e1.prop('href')
   cy.log(url)
   cy.visit(url) 

})


})
})