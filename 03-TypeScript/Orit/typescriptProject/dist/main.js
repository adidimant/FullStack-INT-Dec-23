import { Configuration } from './models/Configuration.js';
import { EventsManager } from "./eventsManager.js";
// Function to initialize your SDK once it's fully loaded
function main() {
    //const sdkInitiallizedEvent: SDKInitializedEvent = new CustomEvent ('sdkInitialized', { detail: {message: 'sdk initialized'} }); TODO: delete!
    const acmeSdkLoaded = new CustomEvent('acmeSdkLoaded', { detail: { message: 'sdk initialized' } });
    document.dispatchEvent(acmeSdkLoaded);
    console.log('acme-sdk-loaded.');
    const sdk = new Configuration;
    const eventmanager = new EventsManager();
    const config = eventmanager.getConfig();
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
