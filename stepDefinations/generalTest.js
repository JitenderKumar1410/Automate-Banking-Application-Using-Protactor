let { Given, When, Then } = require('cucumber');
let propertyMap = require('../hooks/hooks.js');
let generalTestPage = require("../pages/generalTestPage.js");


Given('User opens the XYZ bank application', async function () {
    browser.logger.info("Browser is opening the URL: " + propertyMap["homeUrl"]);
    return await browser.get(propertyMap["homeUrl"]);
});

Given('Verify user is on XYZ bank application', async function () {
        await generalTestPage.userOnPage();
});
