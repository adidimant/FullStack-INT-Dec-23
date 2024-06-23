// Function to initialize your SDK once it's fully loaded
export function initializeSDK() {
    const sdkInitiallizedEvent: SDKInitializedEvent = new CustomEvent ('sdkInitialized', { detail: {message: 'sdk initialized'} });+
    document.dispatchEvent(sdkInitiallizedEvent);

    console.log('Acme-Cyber SDK has finished loading and initialized.');
}

// Check if the document is already loaded
if (document.readyState === 'complete') {
    initializeSDK();
} else {
    // Use DOMContentLoaded event to wait for the document to be ready
    document.addEventListener('DOMContentLoaded', initializeSDK);
}

interface SDKInitializedEvent extends Event {
    detail: { message: string; };
}