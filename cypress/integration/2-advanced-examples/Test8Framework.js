/// <reference types="Cypress"/>
//import cypress from 'cypress' // when cypress is imported then we will get " > process is not defined" error
import Homepage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'


describe("My Third suite",function(){
    before(function(){
      // runs before all tests in the block
      cy.fixture('example').then(function(data)
      {
        globalThis.data=data
      })
    })
    
    it("My first test",function(){
        Cypress.config('defaultCommandTimeout',8000)
        const homePage = new Homepage()
        const productPage = new ProductPage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender) 
        // to check that same text is entered in two fields at same time
        homePage.getTwoWayDateBinding().should('have.value',this.data.name)   
         // to check that textfield character miniumum length is 2
        homePage.getEditBox().should('have.attr','minlength','2')             
         // to check that radio button is disabled
        homePage.getEntrepreneur().should('be.disabled').debug()
        // cypress will pause the execuion of automation script
        // cy.pause()
        homePage.getShopTab().click()
       /* cy.get('h4.card-title').each((el,index,$list)=>{
            if(el.text().includes('Blackberry'))
            {
                cy.get('button.btn.btn-info').eq(index).click()
            }
        }) */

       //to select products from the shop page
       this.data.productName.forEach(function(element) 
       {
        cy.selectProduct(element)
       })
       //click on checkout button in shopping page after selecting products
       productPage.checkOutButton().click()

       // to sum the prices of the product
       var sum=0
       cy.get('tr td:nth-child(4) strong').each((e1,index,list)=>
       {
        const amount = e1.text()
        // split whole text on basis space between the words
        var res = amount.split(" ")
        //removes the spaces before and after the text
        res = res[1].trim()
        sum= Number(sum)+Number(res)
       }).then(function(){
        cy.log(sum)
       })

       cy.get('h3 strong').then(function(element)
       {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
       })
        
       //click on checkout button billing page
       cy.contains('Checkout').click()
       // enter address in the textfield
       cy.get('#country').type('India')
       // select the address country from dropdown
       cy.get('.suggestions > ul > li > a').click()
       // select checkbox
       cy.get('#checkbox2').check({force: true})
       // click on pruchase button
       cy.get('.ng-untouched > .btn').click()
       //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
       //cy.get('.alert').should('include.text','\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        ')
       cy.get('.alert').then(function(element)
       {
           const actualText = element.text()
           //verifies in same line 
           expect(actualText.includes("Success")).to.be.true       
       })














    })
})