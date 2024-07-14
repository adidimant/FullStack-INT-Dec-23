"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventsManager_1 = require("./EventsManager");
const regular_collectors_1 = require("./collectors/regular-collectors");
function main(customerId) {
    document.addEventListener("acme-sdk-loaded", () => {
        const config = EventsManager_1.EventsManager.getConfig(customerId);
        if (config.SDK_ENABLED) {
            const collectors = [
                new regular_collectors_1.ScreenWidthCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.ScreenHeightCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.LanguageCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.UserAgentCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.TimeZoneCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.CookiesEnabledCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.JavaScriptEnabledCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.OnlineStatusCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.ReferrerCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.LocalStorageAvailableCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.NetworkInformationCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.BrowserInfoCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.PlatformCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.DeviceMemoryCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.HardwareConcurrencyCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.PluginsCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.DoNotTrackCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.CurrentUrlCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.HistoryLengthCollector(config.COLLECTORS_INTERVAL),
                new regular_collectors_1.ColorDepthCollector(config.COLLECTORS_INTERVAL),
            ];
            collectors.forEach(collector => collector.startCollect());
            setInterval(() => {
                const data = collectors.reduce((acc, collector) => {
                    acc[collector.getKey()] = collector.getData();
                    return acc;
                }, {});
                EventsManager_1.EventsManager.updateData(data);
            }, config.COLLECTORS_INTERVAL);
        }
    });
    const event = new Event('acme-sdk-loaded');
    document.dispatchEvent(event);
}
;
//main('customer123');
