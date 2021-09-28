Feature: End to end ecommerce validation

    application Regression

    Scenario: Ecommerce products delivery
     Given I open ECommerce page
     When I add items to the Cart
     And Validate the total prices
     Then select the country submit and verify Thankyou
    
    @Smoke
     Scenario: Filling the form to shop
     Given I open ECommerce page
     When I fill the form details
      |name | gender |
      |bobs | Male   |
      |Arun | Male   |
     Then Validate the forms behaviour
     And select the shop Page 