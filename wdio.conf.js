export const config = {
    runner: "browser",
    specs: [
        './src/**/*.test.js'
    ],
    capabilities: [{
        browserName: 'chrome',
    }],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
    before: function (capabilities, specs, browser) {
        browser.addCommand("elemCmd", () => {
            console.log('inside my element command');
        }, true);
    },
}
