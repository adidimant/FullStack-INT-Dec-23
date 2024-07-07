// Import all needed files:
import { Utils } from './utils/Utils';
import { HardwareConcurrency, Platform, DeviceMemory } from './models/Collectors';
import { ScreenWidth, ScreenHeight } from './models/ContinousCollectors';
import { Configuration } from './models/Configuration.js';
import { EventsManager } from "./models/eventsManager.js";

// Declare interface for event:
interface SDKInitializedEvent extends Event {
    detail: { message: string; };
}

// Function to initialize your SDK once it's fully loaded
function main(): void {
    //const sdkInitiallizedEvent: SDKInitializedEvent = new CustomEvent ('sdkInitialized', { detail: {message: 'sdk initialized'} }); TODO: delete!
    const acmeSdkLoaded: SDKInitializedEvent = new CustomEvent ('acmeSdkLoaded', { detail: {message: 'sdk initialized'} });
    document.dispatchEvent(acmeSdkLoaded);
    console.log('acme-sdk-loaded.');
    const sdk: Configuration = new Configuration;
    const eventManager: EventsManager = new EventsManager();
    const config = EventsManager.getConfig();
    
    if (config)
         console.log('config saved is: ' + config.COLLECTORS_INTERVAL)
        {
    };
        
    //console.log(sdk.getConfigFromStorage());
    console.log(sdk.getOrGenerateCustomerId());
    //let config = await sdk.getConfigFromStorage();  //TODO: this is not good. function is unessecary
    //console.log(config.);
      
}

// Check if the document is already loaded
if (document.readyState === 'complete') {
    main();
} else {
    // Use DOMContentLoaded event to wait for the document to be ready
    document.addEventListener('DOMContentLoaded', main);
}