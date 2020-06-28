let testData = require('..//testData//testData.json');
let commonFunctions = require('../utility/commonFunctions.js');
/**
 * This sections contains some of the methods which is specifically for the general scenarios
 */
let generalTestPage = function(){

    this.userOnPage = async function(){
        await commonFunctions.verifyURL(testData.homePageUrl);
        await commonFunctions.verifyTitle(testData.homePageTitle);
    }
};

module.exports = new generalTestPage();
