import { ScreenWidthCollector, ScreenHeightCollector, LanguageCollector, UserAgentCollector, TimeZoneCollector, CookiesEnabledCollector, JavascriptEnabledCollector, OnlineStatusCollector, ReferrerCollector, LocalStorageEnabledCollector, NetworkInformationCollector, ClipboardCollector, BrowserInfoCollector, HardwareConcurrencyCollector, PlatformCollector, DeviceMemoryCollector, PluginsCollector, GeolocationCollector, DoNotTrackInfoCollector, CurrentURLCollector, HistoryLengthCollector, ColorDepthCollector, TouchSupportCollector } from './models/Collectors.js';
import { MouseMoveCollector, KeyboardPressingCollector, ClicksCollector, DeviceMotionCollector, DeviceOrientationCollector } from './models/ContinuousCollectors.js';
import { Configuration } from './models/Configuration.js';
import { EventsManager } from "./models/eventsManager.js";
// Check if the document is already loaded
if (document.readyState === 'complete') {
    main();
}
else {
    // Use DOMContentLoaded event to wait for the document to be ready
    document.addEventListener('DOMContentLoaded', main);
}
// Function to initialize your SDK once it's fully loaded
function main() {
    // Dispatch the custom event indicating the SDK is loaded
    const acmeSdkLoaded = new CustomEvent('acme-sdk-loaded', { detail: { message: 'SDK initialized' } });
    document.dispatchEvent(acmeSdkLoaded);
    console.log('acme-sdk-loaded event dispatched.');
    // Initialize configuration and event manager
    const configure = new Configuration();
    configure.startFetchingConfiguration();
    const eventManager = new EventsManager(); // maybe irrelevant if the functions are static
    // Initialize all collectors
    const collectors = [
        new ScreenWidthCollector(),
        new ScreenHeightCollector(),
        new LanguageCollector(),
        new UserAgentCollector(),
        new TimeZoneCollector(),
        new CookiesEnabledCollector(),
        new JavascriptEnabledCollector(),
        new OnlineStatusCollector(),
        new ReferrerCollector(),
        new LocalStorageEnabledCollector(),
        new NetworkInformationCollector(),
        new ClipboardCollector(),
        new BrowserInfoCollector(),
        new HardwareConcurrencyCollector(),
        new PlatformCollector(),
        new DeviceMemoryCollector(),
        new PluginsCollector(),
        new GeolocationCollector(),
        new DoNotTrackInfoCollector(),
        new CurrentURLCollector(),
        new HistoryLengthCollector(),
        new ColorDepthCollector(),
        new TouchSupportCollector(),
        new MouseMoveCollector(50),
        new KeyboardPressingCollector(50),
        new ClicksCollector(10),
        new DeviceMotionCollector(40),
        new DeviceOrientationCollector(40)
    ];
    eventManager.startCollectors(collectors);
    // Periodically check if data is being collected
    setInterval(() => {
        let nullCheck = true; // Check if all data is null
        collectors.forEach(collector => {
            collector.getData(); // Collect data from all collectors
            if (collector.getData() != null) {
                nullCheck = false;
            }
        });
        if (nullCheck) {
            console.log('All data is null. Collectors not collecting data.');
        }
    }, EventsManager.getConfig().COLLECTORS_INTERVAL);
    // Periodically update data to the server
    eventManager.updateData();
    setInterval(() => {
        eventManager.updateData();
    }, EventsManager.getConfig().COLLECTORS_INTERVAL);
    window.getCollectedData = () => {
        return collectors[19].getData();
    };
}
document.addEventListener('DOMContentLoaded', function () {
    const DataObject = EventsManager.getCollectedData();
    const getScreenWidthDataBtn = document.getElementById('getScreenWidthDataBtn');
    const widthTextElement = document.getElementById('widthText');
    const getCurrentUrlBtn = document.getElementById('getCurrentUrlBtn');
    const currentUrlElement = document.getElementById('currentUrlText');
    let getURL = '';
    if (typeof window.getCollectedData === 'function') {
        getURL = window.getCollectedData();
        //console.log('Collected Data:', collectedData);
    }
    else {
        console.error('getCollectedData function is not defined');
    }
    if (getScreenWidthDataBtn && widthTextElement) {
        getScreenWidthDataBtn.addEventListener('click', () => {
            widthTextElement.textContent = `Screen Width: ${DataObject['ScreenWidthCollector']}`;
        });
    }
    else {
        console.error('Button with ID "getScreenWidthDataBtn" or element with ID "widthText" not found.');
    }
    if (getCurrentUrlBtn && currentUrlElement) {
        getCurrentUrlBtn.addEventListener('click', () => {
            currentUrlElement.textContent = 'Current url: ' + getURL;
        });
    }
    else {
        console.error('Button with ID "getScreenWidthDataBtn" or element with ID "widthText" not found.');
    }
});
