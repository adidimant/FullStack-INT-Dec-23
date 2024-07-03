// Import all needed files:
import { Utils } from './utils/Utils';
import { HardwareConcurrency, Platform, DeviceMemory } from './models/Collectors';
import { ScreenWidth, ScreenHeight } from './models/ContinousCollectors';
import { AcmeCyberSdk } from './models/AcmeCyberSdk.js';

// Declare interface for event:
interface SDKInitializedEvent extends Event {
    detail: { message: string; };
}

// Function to initialize your SDK once it's fully loaded
function main(): void {
    //const sdkInitiallizedEvent: SDKInitializedEvent = new CustomEvent ('sdkInitialized', { detail: {message: 'sdk initialized'} }); TODO: delete!
    const acmeSdkLoaded: SDKInitializedEvent = new CustomEvent ('acmeSdkLoaded', { detail: {message: 'sdk initialized'} });
    document.dispatchEvent(acmeSdkLoaded);

    const sdk = new AcmeCyberSdk;
    sdk.saveCustomerId('123456');
    sdk.fetchConfiguration(sdk.getCustomerId());
    /*console.log(sdk.getCustomerId());
    console.log(sdk.fetchConfiguration(sdk.getCustomerId()));
    console.log(sdk.getConfig());*/
    
    

    console.log('acme-sdk-loaded.');
}

// Check if the document is already loaded
if (document.readyState === 'complete') {
    main();
} else {
    // Use DOMContentLoaded event to wait for the document to be ready
    document.addEventListener('DOMContentLoaded', main);
}