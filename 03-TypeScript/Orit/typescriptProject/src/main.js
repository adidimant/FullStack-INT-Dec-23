"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Configuration_js_1 = require("./models/Configuration.js");
const eventsManager_js_1 = require("./models/eventsManager.js");
// Function to initialize your SDK once it's fully loaded
function main() {
    //const sdkInitiallizedEvent: SDKInitializedEvent = new CustomEvent ('sdkInitialized', { detail: {message: 'sdk initialized'} }); TODO: delete!
    const acmeSdkLoaded = new CustomEvent('acmeSdkLoaded', { detail: { message: 'sdk initialized' } });
    document.dispatchEvent(acmeSdkLoaded);
    console.log('acme-sdk-loaded.');
    const sdk = new Configuration_js_1.Configuration;
    const eventManager = new eventsManager_js_1.EventsManager();
    const config = eventsManager_js_1.EventsManager.getConfig();
    if (config)
        console.log('config saved is: ' + config.COLLECTORS_INTERVAL);
    {
    }
    ;
    //console.log(sdk.getConfigFromStorage());
    console.log(sdk.getOrGenerateCustomerId());
    //let config = await sdk.getConfigFromStorage();  //TODO: this is not good. function is unessecary
    //console.log(config.);
}
// Check if the document is already loaded
if (document.readyState === 'complete') {
    main();
}
else {
    // Use DOMContentLoaded event to wait for the document to be ready
    document.addEventListener('DOMContentLoaded', main);
}
