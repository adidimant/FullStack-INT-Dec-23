import { AcmeCyberSdk } from './models/AcmeCyberSdk.js';
// Function to initialize your SDK once it's fully loaded
function main() {
    //const sdkInitiallizedEvent: SDKInitializedEvent = new CustomEvent ('sdkInitialized', { detail: {message: 'sdk initialized'} }); TODO: delete!
    const acmeSdkLoaded = new CustomEvent('acmeSdkLoaded', { detail: { message: 'sdk initialized' } });
    document.dispatchEvent(acmeSdkLoaded);
    const sdk = new AcmeCyberSdk;
    sdk.saveCustomerId('123456');
    console.log(sdk.getCustomerId());
    console.log(sdk.fetchConfiguration(sdk.getCustomerId()));
    console.log(sdk.getConfig());
    console.log('acme-sdk-loaded.');
}
// Check if the document is already loaded
if (document.readyState === 'complete') {
    main();
}
else {
    // Use DOMContentLoaded event to wait for the document to be ready
    document.addEventListener('DOMContentLoaded', main);
}
