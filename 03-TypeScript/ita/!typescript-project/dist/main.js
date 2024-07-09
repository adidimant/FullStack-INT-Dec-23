var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ScreenWidthcollector, ScreenHeightcollector, Languagecollector, UserAgentcollector, TimeZoneCollector, TcookiesEnabledCollector, JavaScriptEnabledCollector, OnlineStatusCollector, ReferrerCollector, LocalStorageAvailableCollector, NetworkInformationCollector, GetclipboardCollector, GetConnectionCollector, BrowserInfocollector, Platformcollector, DeviceMemorycollector, HardwareConcurrencyCollector, DoNotTrackCollector, GetBatteryInfoCollector, CurrentUrlCollector, HistoryLengthCollector, ColorDepthCollector, TouchSupportCollector, PluginsCollector } from "./Collector.js";
import { Mousemovecollector, Keyupcollector, Clickcollector, DeviceMotioncollector, DeviceOrientationCollector } from "./continuosCollector.js";
import { EventsManager } from "./EventsManager.js";
//יצירת אירוע מותאם אישית ומה הוא עושה באירוע
const myAcmeSdkLoaded = new CustomEvent("acme-sdk-loaded");
function main() {
    const customerId = "vklfdv645m"; //ID של המשתמש
    const manager = new EventsManager(customerId); //משתנה שיש בו את הנתונים מהשרת
    setInterval(() => __awaiter(this, void 0, void 0, function* () {
        const config = yield manager.getConfig();
        if (config.SDK_ENABLED) { //בדיקה האם הSDK תקין
            let collectors = [
                new ScreenWidthcollector(config.COLLECTORS_INTERVAL),
                new ScreenHeightcollector(config.COLLECTORS_INTERVAL),
                new Languagecollector(config.COLLECTORS_INTERVAL),
                new UserAgentcollector(config.COLLECTORS_INTERVAL),
                new TimeZoneCollector(config.COLLECTORS_INTERVAL),
                new TcookiesEnabledCollector(config.COLLECTORS_INTERVAL),
                new JavaScriptEnabledCollector(config.COLLECTORS_INTERVAL),
                new OnlineStatusCollector(config.COLLECTORS_INTERVAL),
                new ReferrerCollector(config.COLLECTORS_INTERVAL),
                new LocalStorageAvailableCollector(config.COLLECTORS_INTERVAL),
                new NetworkInformationCollector(config.COLLECTORS_INTERVAL),
                new GetclipboardCollector(config.COLLECTORS_INTERVAL),
                new GetConnectionCollector(config.COLLECTORS_INTERVAL),
                new BrowserInfocollector(config.COLLECTORS_INTERVAL),
                new Platformcollector(config.COLLECTORS_INTERVAL),
                new DeviceMemorycollector(config.COLLECTORS_INTERVAL),
                new HardwareConcurrencyCollector(config.COLLECTORS_INTERVAL),
                new DoNotTrackCollector(config.COLLECTORS_INTERVAL),
                new GetBatteryInfoCollector(config.COLLECTORS_INTERVAL),
                new CurrentUrlCollector(config.COLLECTORS_INTERVAL),
                new HistoryLengthCollector(config.COLLECTORS_INTERVAL),
                new ColorDepthCollector(config.COLLECTORS_INTERVAL),
                new TouchSupportCollector(config.COLLECTORS_INTERVAL),
                new PluginsCollector(config.COLLECTORS_INTERVAL),
                new Mousemovecollector(config.COLLECTORS_INTERVAL, 50),
                new Keyupcollector(config.COLLECTORS_INTERVAL, 50),
                new Clickcollector(config.COLLECTORS_INTERVAL, 10),
                new DeviceMotioncollector(config.COLLECTORS_INTERVAL, 40),
                new DeviceOrientationCollector(config.COLLECTORS_INTERVAL, 40)
            ];
            collectors.forEach((collector) => {
                collector.startCollect();
            });
            setInterval(() => {
                let collectorsData = {};
                collectors.forEach((collector) => {
                    let key = collector.getKey();
                    collectorsData[key] = collector.getData();
                });
                EventsManager.updateData(collectorsData);
            }, config.COLLECTORS_INTERVAL);
        }
    }), 60000);
}
document.addEventListener("DOMContentLoaded", () => {
    const DataObjectCollector = EventsManager.getCollectorData();
    const ScreenWidthbutton = document.getElementById("ScreenWidthbutton");
    const ScreenWidthtext = document.getElementById("ScreenWidthtext");
    const languagebutton = document.getElementById("languagebutton");
    const languagehtext = document.getElementById("languagetext");
    const userAgentbutton = document.getElementById("userAgentbutton");
    const userAgenttext = document.getElementById("userAgenttext");
    if (ScreenWidthbutton && ScreenWidthtext) {
        ScreenWidthbutton.addEventListener("click", () => {
            ScreenWidthtext.textContent = `Screen Width: ${DataObjectCollector.ScreenWidth}`;
        });
    }
    ;
    if (languagebutton && languagehtext) {
        languagebutton.addEventListener("click", () => {
            languagehtext.textContent = `language: ${DataObjectCollector.language}`;
        });
    }
    ;
    if (userAgentbutton && userAgenttext) {
        userAgentbutton.addEventListener("click", () => {
            userAgenttext.textContent = `user Agen: ${DataObjectCollector.userAgent}`;
        });
    }
});
window.addEventListener("acme-sdk-loaded", main);
window.dispatchEvent(myAcmeSdkLoaded);
