var chai = require('chai');
var expect = chai.expect;
var propertyMap = require('..//hooks//hooks.js');

/**
 * This sections contains all of the generic functions of the framework. To remove duplicate code at page level, Created one section for all generic functions.
 */
var commonFunction = function () {

    this.textOnElement = async function (path, value) {
        browser.logger.info("Getting the text from webelement :" + path);
        browser.logger.info("Expected text would be :" + value);
        await element(by.xpath(path)).getText().then(function (text) {
            expect(text).to.equal(value);
            browser.logger.debug("Text on webelement :" + path + " Should be equal to " + value);
        })
    };

    this.clickOnElement = async function (path) {
        browser.logger.info("Clicking on webelement :" + path)
        await element(by.xpath(path)).click();
        browser.logger.debug("successfully clicked on webelement :" + path)
        return await browser.sleep(propertyMap["smallWait"]);

    };

    this.verifyURL = async function (url) {
        browser.logger.info("Expected URL is: " + url);
        await browser.getCurrentUrl().then(function (currentUrl) {
            expect(currentUrl).to.equal(url);
            browser.logger.debug("Current URL: " + currentUrl + " Should be equal to: " + url);
        })

    };

    this.verifyTitle = async function (title) {
        browser.logger.info("Expected title of the page is: " + title);
        await browser.getTitle().then(function (currentTitle) {
            expect(currentTitle).to.equal(title);
            browser.logger.debug("Current Title of page is : " + currentTitle + " Should be equal to: " + title);
        })

    };

    this.setText = async function (path, text) {
        await element(by.xpath(path)).sendKeys(text);
        browser.logger.info("Text " + text + " is set on webelement: " + path);
    };
}

module.exports = new commonFunction();

