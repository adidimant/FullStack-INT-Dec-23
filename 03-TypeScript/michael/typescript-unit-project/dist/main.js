"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScreenWidthCollector_1 = require("./collectors/ScreenWidthCollector");
var ScreenHeightCollector_1 = require("./collectors/ScreenHeightCollector");
var UserAgentCollector_1 = require("./collectors/UserAgentCollector");
var TimeZoneCollector_1 = require("./collectors/TimeZoneCollector");
var CookiesEnabledCollector_1 = require("./collectors/CookiesEnabledCollector");
var JavaScriptEnabledCollector_1 = require("./collectors/JavaScriptEnabledCollector");
var EventsManager_1 = require("./events/EventsManager");
document.addEventListener('acme-sdk-loaded', function () {
    var config = EventsManager_1.EventsManager.getConfig();
    var collectors = [
        new ScreenWidthCollector_1.ScreenWidthCollector(),
        new ScreenHeightCollector_1.ScreenHeightCollector(),
        new UserAgentCollector_1.UserAgentCollector(),
        new TimeZoneCollector_1.TimeZoneCollector(),
        new CookiesEnabledCollector_1.CookiesEnabledCollector(),
        new JavaScriptEnabledCollector_1.JavaScriptEnabledCollector(),
    ];
    if (config['SDK_ENABLED']) {
        collectors.forEach(function (collector) { return collector.startCollect(); });
        setInterval(function () {
            var data = {};
            collectors.forEach(function (collector) {
                var key = collector.getKey();
                data[key] = collector.getData();
            });
            EventsManager_1.EventsManager.updateData(data);
        }, config['COLLECTORS_INTERVAL']);
    }
});
// Dispatch the 'acme-sdk-loaded' event once the script is loaded
window.addEventListener('load', function () {
    var event = new CustomEvent('acme-sdk-loaded');
    document.dispatchEvent(event);
});
