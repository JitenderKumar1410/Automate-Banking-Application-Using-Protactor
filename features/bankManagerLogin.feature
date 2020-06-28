@bankManagerLogin @functionalTestCase
Feature: Test bank manager login part of XYZ bank

    Background:
        Given User opens the XYZ bank application

    @addCustomerTestCase
    Scenario Outline: Verify the add customer functionality of bank manager login
        Then Verify user is on XYZ bank application
        And Check the text of 'Bank Manager Login' button
        When Click on 'Bank Manager Login' button
        Then Verify 'Bank Manager Login Page' open successfully
        And Check the text of 'Add Customer' button
        When Click on 'Add Customer' button
        Then Verify 'Add Customer Page' open successfully
        And Verify 'text on add customer' page
        Then Set the <valueOfFirstName> text under 'First Name'
        Then Set the <valueOfLastName> text under 'Last Name'
        Then Set the <valueOfPostCode> text under 'Post Code'
        When Click on 'Add Customer button' to add customer
        Then Verify 'customer added successful' message on alert
        And Verify 'Add Customer Page' open successfully

        Examples:
            | valueOfFirstName | valueOfLastName | valueOfPostCode |
            | 'Nupur'          | 'Saini'         | '3148294'       |
            | 'NAGP'           | 'BATCH'         | '2019'          |
            | 'NetEnt'         | 'Nagarro'       | '371'           |

    @openAccountTestCase
    Scenario Outline: Verify the open account functionality of bank manager login
        Then Verify user is on XYZ bank application
        And Check the text of 'Bank Manager Login' button
        When Click on 'Bank Manager Login' button
        Then Verify 'Bank Manager Login Page' open successfully
        And Check the text of 'Open Account' button
        When Click on 'Open Account' button
        Then Verify 'Open Account Page' open successfully
        And Verify 'text on open account' page
        Then Select <Customer> from the open account page
        And Select <Currency> from the open account page
        And Check the text of 'Process' button
        When Click on 'Process' button
        Then Verify 'customer created with account number' message on alert
        And Verify 'Open Account Page' open successfully

        Examples:
            | Customer           | Currency |
            | 'Hermoine Granger' | 'Dollar' |
            | 'Harry Potter'     | 'Rupee'  |
            | 'Albus Dumbledore' | 'Pound'  |

    @customersTestCase
    Scenario: Verify the customers functionality of bank manager login
        Then Verify user is on XYZ bank application
        And Check the text of 'Bank Manager Login' button
        When Click on 'Bank Manager Login' button
        Then Verify 'Bank Manager Login Page' open successfully
        And Check the text of 'Customers' button
        When Click on 'Customers' button
        Then Verify 'Customers Page' open successfully
