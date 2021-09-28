/// <reference types="Cypress"/>
describe("My first suite",function(){
    
it("My first test",function(){

//cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.visit(Cypress.env('url')+"seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
// parent child chaining // as is alias
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length',4)
cy.get(':nth-child(3) > .product-action > button').click()
console.log('sf')
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
    console.log('sf') //non cypress command
}) 
cy.get('@productLocator').find('.product').each(($e1,index,$list)=>{
console.log('sf')
const textVeg = $e1.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
    // ()
    $e1.find('button').click()
}
})

//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

// this is to print in logs ( Cypress Command Log)
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
})
//const logo = cy.get('.brand')
//cy.get('.brand').text() // wont work as text is not cypress method
//console.log(logo.text)

})
})
