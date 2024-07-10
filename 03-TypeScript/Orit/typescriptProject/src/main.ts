// Import all needed files:
import { Utils } from './utils/Utils';
import {
    ScreenWidthCollector, ScreenHeightCollector, LanguageCollector, UserAgentCollector, TimeZoneCollector,
    CookiesEnabledCollector, JavascriptEnabledCollector, OnlineStatusCollector, ReferrerCollector, LocalStorageEnabledCollector,
    NetworkInformationCollector, ClipboardCollector, BrowserInfoCollector, HardwareConcurrencyCollector, PlatformCollector,
    DeviceMemoryCollector, PluginsCollector, GeolocationCollector, DoNotTrackInfoCollector, CurrentURLCollector,
    HistoryLengthCollector, ColorDepthCollector, TouchSupportCollector
} from './models/Collectors.js';
import { Collector } from "./interfaces/ICollector.js";
import {
    MouseMoveCollector, KeyboardPressingCollector, ClicksCollector, DeviceMotionCollector,
    DeviceOrientationCollector
} from './models/ContinuousCollectors.js';
import { Configuration } from './models/Configuration.js';
import { EventsManager } from "./models/eventsManager.js";
import { CollectedData, DataType } from "./types/DataType";
import { DataObject } from "./interfaces/idataObject";

// Declare interface for the custom event:
interface SDKInitializedEvent extends CustomEvent {
    detail: { message: string };
}

// Check if the document is already loaded
if (document.readyState === 'complete') {
    main();
} else {
    // Use DOMContentLoaded event to wait for the document to be ready
    document.addEventListener('DOMContentLoaded', main);
}

// Function to initialize your SDK once it's fully loaded
function main(): void {
    // Dispatch the custom event indicating the SDK is loaded
    const acmeSdkLoaded: SDKInitializedEvent = new CustomEvent('acme-sdk-loaded', { detail: { message: 'SDK initialized' } });
    document.dispatchEvent(acmeSdkLoaded);
    console.log('acme-sdk-loaded event dispatched.');

    // Initialize configuration and event manager
    const configure: Configuration = new Configuration();
    configure.startFetchingConfiguration();
    const eventManager: EventsManager = new EventsManager(); // maybe irrelevant if the functions are static

    // Initialize all collectors
    const collectors: Collector<any>[] = [
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
    setInterval(() => {
        eventManager.updateData();
    }, EventsManager.getConfig().COLLECTORS_INTERVAL);

    
}

document.addEventListener('DOMContentLoaded', function() {
    const DataObject: DataObject<any> = EventsManager.getCollectedData();
    const getScreenWidthDataBtn: HTMLElement | null = document.getElementById('getScreenWidthDataBtn');
    const widthTextElement: HTMLElement | null = document.getElementById('widthText');
    const getCurrentUrlBtn: HTMLElement | null = document.getElementById('getCurrentUrlBtn');
    const currentUrlElement: HTMLElement | null = document.getElementById('currentUrlText');
    

    if (getScreenWidthDataBtn && widthTextElement) {
        getScreenWidthDataBtn.addEventListener('click', () => {
            widthTextElement.textContent = `Screen Width: ${DataObject['ScreenWidthCollector']}`;
        });
    } else {
        console.error('Button with ID "getScreenWidthDataBtn" or element with ID "widthText" not found.');
    }
    if (getCurrentUrlBtn && currentUrlElement) {
        getCurrentUrlBtn.addEventListener('click', () => {
            currentUrlElement.textContent = `Current url: ${DataObject['CurrentURLCollector']}`;
        });
    } else {
        console.error('Button with ID "getScreenWidthDataBtn" or element with ID "widthText" not found.');
    }
});