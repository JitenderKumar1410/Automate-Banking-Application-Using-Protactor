let { Given, When, Then } = require('cucumber');
let bankManagerLoginPage = require("../pages/bankManagerLoginPage.js");

When('Click on {string} to add customer', async function (string) {
    await bankManagerLoginPage.clickOn(string);
});

Then('Verify {string} message on alert', async function (string) {
    await bankManagerLoginPage.verifyTextOnalert(string);
});

When('Select {string} from the open account page', async function (string) {
    await bankManagerLoginPage.selectCustomerFromDropdown(string);
});

