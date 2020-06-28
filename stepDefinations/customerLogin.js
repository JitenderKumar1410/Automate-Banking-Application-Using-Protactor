let { Given, When, Then } = require('cucumber');
let customerLoginPage = require("..//pages//customerLoginPage.js");

When('Select {string} from the list', async function (string) {
    await customerLoginPage.selectFromDropdown(string);
});

When('Click on the {string} to add money', async function (string) {
    await customerLoginPage.clickOn(string);
});

