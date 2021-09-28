/// <reference types="Cypress"/>
describe("My Second suite",function(){
    
it("My first test",function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
// parent child chaining // as is alias
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').each(($e1,index,$list)=>{

const textVeg = $e1.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
    $e1.find('button').click()
}
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.get(':nth-child(14)').click()
cy.visit("https://www.udemy.com/course/cypress-tutorial/learn/lecture/15647436#overview")
})
})
