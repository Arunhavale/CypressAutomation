/// <reference types="Cypress"/>
describe("My Third suite",function(){
    
it("My first test",function(){

    //Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3'])
 
//static dropdown
cy.get('select').select('Option2').should('have.value','option2')

//dynamic dropdown
cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item').each(($e1, index, $list) => {

    if($e1.text()==='India')
    {
        $e1.click()
    }

})
//autocomplete
cy.get('#autocomplete').should('have.value','India')

// Visible invisible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//Radio button
cy.get('[value="radio1"]').check().should('be.checked')


})
})
