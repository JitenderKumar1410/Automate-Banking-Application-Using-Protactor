let propertyMap = require('../hooks/hooks.js');
let object = require('..//objectRepository//customerLoginOR.json');
const { toCamelCase } = require("../utility/string.js");

/**
 * This sections contains some of the methods which is specifically for the customer login page
 */
let customerLoginPage = function(){

    this.selectFromDropdown = async function(string){
        browser.logger.info("Selecting " + string + "option from the dropdown");
        await element(by.cssContainingText('option', string)).click();
        return browser.sleep(propertyMap["smallWait"]);
    };

    this.clickOn = async function(string){
        const elementName = await toCamelCase(string);
        await element(by.xpath(object.Locators[elementName])).click();
        browser.logger.info("Clicked on webelement :" + object.Locators[elementName]);
        return await browser.sleep(propertyMap["mediumWait"]);
    };
};

module.exports = new customerLoginPage();
