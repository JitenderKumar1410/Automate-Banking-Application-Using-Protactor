@generalScenario @functionalTestCase
Feature: Test general scenarios of XYZ bank

    @textOfBankTestCase
    Scenario: Verify the text of home page of XYZ bank
        Given User opens the XYZ bank application
        Then Verify user is on XYZ bank application
        And Verify 'text on home' page
        
    @homeButtonTestCase
    Scenario: Verify the click functionality of home button
        Then Check the text of 'Home' button
        When Click on 'Home' button
        Then Verify user is on XYZ bank application
