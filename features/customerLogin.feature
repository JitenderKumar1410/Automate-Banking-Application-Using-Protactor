@customerLogin @functionalTestCase
Feature: Test customer login part of XYZ bank

    Background:
        Given User opens the XYZ bank application

    @loginLogoutTestCase
    Scenario Outline: Verify the login and logout functionality of XYZ bank
        Then Verify user is on XYZ bank application
        And Check the text of 'customer login' button
        When Click on 'customer login' button
        Then Verify 'customer login page' open successfully
        And Verify 'text on customer login' page
        When Select <userName> from the list
        When Click on 'login' button
        Then Verify the <userName> on 'user account screen'
        When Click on 'logout' button
        Then  Verify 'customer login page' open successfully
        When  Click on 'home' button
        Then Verify user is on XYZ bank application

        Examples:
            | userName             |
            | 'Hermoine Granger'   |
            | 'Harry Potter'       |
            | 'Ron Weasly'         |
            | 'Albus Dumbledore'   |
            | 'Neville Longbottom' |

    @depositAndWithdrawlTestCase
    Scenario Outline: Verify the deposit and withdrawl functionality of XYZ bank
        Then Verify user is on XYZ bank application
        And Check the text of 'customer login' button
        When Click on 'customer login' button
        Then Verify 'customer login page' open successfully
        And Verify 'text on customer login' page
        When Select <userName> from the list
        When Click on 'login' button
        Then Verify the <userName> on 'user account screen'
        When Click on <button> button
        Then Verify <textOn> page
        Then Set the <amount> text under <section>
        When Click on the <lastButton> to add money
        Then Verify the <message> on <screen>

        Examples:
            | userName           | button      | textOn              | amount | section             | lastButton         | message                  | screen             |
            | 'Hermoine Granger' | 'deposit'   | 'text on deposit'   | '1000' | 'deposit section'   | 'deposit button'   | 'Deposit Successful'     | 'deposit screen'   |
            | 'Harry Potter'     | 'deposit'   | 'text on deposit'   | '2000' | 'deposit section'   | 'deposit button'   | 'Deposit Successful'     | 'deposit screen'   |
            | 'Albus Dumbledore' | 'deposit'   | 'text on deposit'   | '3000' | 'deposit section'   | 'deposit button'   | 'Deposit Successful'     | 'deposit screen'   |
            | 'Hermoine Granger' | 'withdrawl' | 'text on withdrawl' | '1000' | 'withdrawl section' | 'withdrawl button' | 'Transaction successful' | 'withdrawl screen' |
            | 'Harry Potter'     | 'withdrawl' | 'text on withdrawl' | '2000' | 'withdrawl section' | 'withdrawl button' | 'Transaction successful' | 'withdrawl screen' |
            | 'Albus Dumbledore' | 'withdrawl' | 'text on withdrawl' | '3000' | 'withdrawl section' | 'withdrawl button' | 'Transaction successful' | 'withdrawl screen' |