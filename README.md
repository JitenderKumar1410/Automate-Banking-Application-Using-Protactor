# NAGP ASSIGNMENT PROTRACTOR

# Wow Factor

* Haven't used browser.sleep in the framework, Used only async and await functions.

* Each and every test case is isolated, Just need to mention the tag name under cucumberOpts of config.js. 

tags: "@loginLogoutTestCase"

Also created different scripts under package.json for all type of test cases.

* Almost each and every step defination is generic so it can used for multiple scenario.

* Taking screenshot of failed scenario with their scenario name under output folder as well as attaching the screenshot in cucmber test report.

* Under Utility, I have created some generic functions which is used in framework at each level. That has been reduced the code in stepdefinations and their pages.

Everything has been controlled only through commonFunctions.js

* Created seperate property file to read the general information of the test like URL of the application.

* Used proper coding practice, Like using of let and camel casing

**What all dependencies used for this task?**
-----
 * Chai
 * Cucumber
 * log4js
 * log4js-protractor-appender
 * protractor
 * protractor-cucumber-framework
 * protractor-multiple-cucumber-html-reporter-plugin
 * Gherkin
 * Java Script
 

**What all I have included in this project?**
----
*PROTRACTORASSIGNMENT.features folder* : It contains all of the test scenario is in plain english.

*PROTRACTORASSIGNMENT.hooks folder* : Contains all of the steps which needs to be executed before and after the execution of test case.

*PROTRACTORASSIGNMENT.logs folder* : Contains logs is in text file for the last execution of the framework.

*PROTRACTORASSIGNMENT.objectRepository folder* : Contains all of the information about the webelements and I have segreated this information at page level. Each page has their own object repoistory.

*PROTRACTORASSIGNMENT.pages folder* : Contains all of the methods corresponds to their page.

*PROTRACTORASSIGNMENT.stepDefinations folder* : Contains all of the step definitions corresponds to their feature files.

*PROTRACTORASSIGNMENT.testData folder* : Contains all of the test data in JSON format

*PROTRACTORASSIGNMENT.utility folder* : Conatins utils which can be used anywhere in project like camel casing of the string.

# TEST REPORT

Implemented protractor-multiple-cucumber-html-reporter-plugin test report.

HTML report with is placed inside the .reports//report folder with name index.html.


# What all setup required to run the test cases

Just download the project and run few commands in specific order:
npm install
npm start

* Created different scripts uunder paclage.json like:
    "all": "protractor --cucumberOpts.tags=\"@functionalTestCase\" config.js",
    "bankManagerLogin": "protractor --cucumberOpts.tags=\"@bankManagerLogin\" config.js",
    "customerLogin": "protractor --cucumberOpts.tags=\"@customerLogin\" config.js",
    "generalScenario": "protractor --cucumberOpts.tags=\"@generalScenario\" config.js"

Run:
npm run all: to execute all of the test
npm run bankManagerLogin: to execute all of the test related to bank manager login
npm run customerLogin: to execute all of the test related to customer login
npm run generalScenario: to execute all of the general test

** Can run through cmd or any editor like visual studio **

