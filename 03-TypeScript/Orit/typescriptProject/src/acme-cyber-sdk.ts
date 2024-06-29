// Import all needed files:
import { Utils } from './utils/Utils';
import { HardwareConcurrency, Platform, DeviceMemory } from './models/Collectors';
import { ScreenWidth } from './models/ContinousCollectors';

// Function to initialize your SDK once it's fully loaded
function main(): void {
    //const sdkInitiallizedEvent: SDKInitializedEvent = new CustomEvent ('sdkInitialized', { detail: {message: 'sdk initialized'} }); TODO: delete!
    const acmeSdkLoaded: SDKInitializedEvent = new CustomEvent ('sdkInitialized', { detail: {message: 'sdk initialized'} });
    document.dispatchEvent(acmeSdkLoaded);

    console.log('acme-sdk-loaded.');
}

// Check if the document is already loaded
if (document.readyState === 'complete') {
    main();
} else {
    // Use DOMContentLoaded event to wait for the document to be ready
    document.addEventListener('DOMContentLoaded', main);
}

interface SDKInitializedEvent extends Event {
    detail: { message: string; };
}