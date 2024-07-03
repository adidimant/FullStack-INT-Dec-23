"use strict";
// ts-files/main.ts
Object.defineProperty(exports, "__esModule", { value: true });
const ScreenWidthCollector_1 = require("./collectors/ScreenWidthCollector");
const ScreenHeightCollector_1 = require("./collectors/ScreenHeightCollector");
const UserAgentCollector_1 = require("./collectors/UserAgentCollector");
const TimeZoneCollector_1 = require("./collectors/TimeZoneCollector");
const CookiesEnabledCollector_1 = require("./collectors/CookiesEnabledCollector");
const JavaScriptEnabledCollector_1 = require("./collectors/JavaScriptEnabledCollector");
const EventsManager_1 = require("./events/EventsManager");
document.addEventListener('acme-sdk-loaded', () => {
    const config = EventsManager_1.EventsManager.getConfig(); // Use SDKConfig type here
    const collectors = [
        new ScreenWidthCollector_1.ScreenWidthCollector(),
        new ScreenHeightCollector_1.ScreenHeightCollector(),
        new UserAgentCollector_1.UserAgentCollector(),
        new TimeZoneCollector_1.TimeZoneCollector(),
        new CookiesEnabledCollector_1.CookiesEnabledCollector(),
        new JavaScriptEnabledCollector_1.JavaScriptEnabledCollector(),
    ];
    if (config.SDK_ENABLED) { // Access properties using the interface
        collectors.forEach(collector => collector.startCollect());
        setInterval(() => {
            const data = {};
            collectors.forEach(collector => {
                const key = collector.getKey();
                data[key] = collector.getData();
            });
            EventsManager_1.EventsManager.updateData(data);
        }, config.COLLECTORS_INTERVAL);
    }
});
// Dispatch the 'acme-sdk-loaded' event once the script is loaded
window.addEventListener('load', () => {
    const event = new CustomEvent('acme-sdk-loaded');
    document.dispatchEvent(event);
});
