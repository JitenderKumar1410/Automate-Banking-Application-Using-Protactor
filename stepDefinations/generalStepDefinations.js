let { Given, When, Then } = require('cucumber');
let object1 = require('..//objectRepository//customerLoginOR.json');
let object2 = require('..//objectRepository//generalScenarioOR.json');
let object3 = require('..//objectRepository//bankManagerLoginOR.json');
let testData = require('..//testData//testData.json');
let commonFunctions = require('../utility/commonFunctions.js');
const { toCamelCase, realMerge } = require("../utility/string.js");
const obj = realMerge(object1, object2);
const object = realMerge(obj, object3);

/**
 * This section includes the heart of framework, All of the generic step definitions are present here.
 * All of the step definitions can be used anywhere of the project by just passing the required arguments.
 */
Then('Check the text of {string} button', async function (string) {
    const elementName = await toCamelCase(string);
    await commonFunctions.textOnElement(object.Locators[elementName], testData[elementName]);
});

When('Click on {string} button', async function (string) {
    const elementName = await toCamelCase(string);
    await commonFunctions.clickOnElement(object.Locators[elementName]);
});

Then('Verify {string} open successfully', async function (string) {
    const elementName = await toCamelCase(string);
    await commonFunctions.verifyURL(testData[elementName]);
});

Then('Verify {string} page', async function (string) {
    const elementName = await toCamelCase(string);
    await commonFunctions.textOnElement(object.Locators[elementName], testData[elementName]);
});

Then('Verify the {string} on {string}', async function (text,  path) {
    const elementName = await toCamelCase(path);
    await commonFunctions.textOnElement(object.Locators[elementName], text );
});

Then('Set the {string} text under {string}', async function (value, string) {
    const elementName = await toCamelCase(string);
    await commonFunctions.setText(object.Locators[elementName], value );
});

