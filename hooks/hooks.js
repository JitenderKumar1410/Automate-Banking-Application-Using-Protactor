const { BeforeAll, After, AfterAll, Before } = require("cucumber");
let fs = require("fs");
let propertyMap = {};

BeforeAll({ timeout: 10 * 1000 }, async function () {
    let propertyContent = fs.readFileSync(".//propertiesFile//prop.properties");
    let fullPropContent = propertyContent.toString();
    let propPairs = fullPropContent.split("\n");
    for (let i = 0; i < propPairs.length; i++) {
        let propValue = propPairs[i].split("=");
        propertyMap[propValue[0]] = propValue[1]
    }
    return await propertyMap;
});

Before(function (scenario) {
    browser.logger.info("******** Execution of Scenario '" + scenario.pickle.name + "' has been started.********");
});

After(function (scenarioResult) {
    if (scenarioResult.result.status === 'failed') {
        let self = this;
        return browser.takeScreenshot().then(function (base64png) {
            self.attach(new Buffer(base64png, 'base64'), 'image/png');
        });
    }
});

After(function (scenario) { 
    browser.takeScreenshot().then(function (png) {
    var dirPath = './output/screenshots/';
    if (!fs.existsSync('./output')) {
        fs.mkdirSync('./output');
        if (!fs.existsSync(dirPath))
            fs.mkdirSync(dirPath);
    }
    var stream = fs.createWriteStream(dirPath + '/' + scenario.pickle.name+'Failed_spec_screenshot.png');
    stream.write(new Buffer(png, 'base64'));
          stream.end();
    })
    browser.logger.info("****** Execution of Scenario '" + scenario.pickle.name + "' has been completed.********");
});

module.exports = propertyMap;
