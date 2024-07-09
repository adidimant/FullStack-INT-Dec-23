"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventsManager_1 = require("./EventsManager");
const ScreenWidthCollector_1 = require("./ScreenWidthCollector");
const ScreenHeightCollector_1 = require("./ScreenHeightCollector");
const LanguageCollector_1 = require("./LanguageCollector");
const UserAgentCollector_1 = require("./UserAgentCollector");
const TimezoneCollector_1 = require("./TimezoneCollector");
const ClipboardCollector_1 = require("./ClipboardCollector");
const NetworkInformationCollector_1 = require("./NetworkInformationCollector");
const ReferrerCollector_1 = require("./ReferrerCollector");
const CookiesEnabledCollector_1 = require("./CookiesEnabledCollector");
const OnlineStatusCollector_1 = require("./OnlineStatusCollector");
const LocalStorageAvailableCollector_1 = require("./LocalStorageAvailableCollector");
const JavaScriptEnabledCollector_1 = require("./JavaScriptEnabledCollector");
const BrowserInfoCollector_1 = require("./BrowserInfoCollector");
const PlatformCollector_1 = require("./PlatformCollector");
const DeviceMemoryCollector_1 = require("./DeviceMemoryCollector");
const HardwareConcurrencyCollector_1 = require("./HardwareConcurrencyCollector");
const PluginsCollector_1 = require("./PluginsCollector");
const GeolocationCollector_1 = require("./GeolocationCollector");
const DoNotTrackCollector_1 = require("./DoNotTrackCollector");
const BatteryInfoCollector_1 = require("./BatteryInfoCollector");
const CurrentUrlCollector_1 = require("./CurrentUrlCollector");
const HistoryLengthCollector_1 = require("./HistoryLengthCollector");
const ColorDepthCollector_1 = require("./ColorDepthCollector");
const TouchSupportCollector_1 = require("./TouchSupportCollector");
const DeviceMotionCollector_1 = require("./DeviceMotionCollector");
const MouseMoveCollector_1 = require("./MouseMoveCollector");
const KeyUpCollector_1 = require("./KeyUpCollector");
const ClickCollector_1 = require("./ClickCollector");
const DeviceOrientationCollector_1 = require("./DeviceOrientationCollector");
class SDK {
    constructor(customerId) {
        this.collectors = [];
        this.customerId = customerId;
        window.addEventListener('acme-sdk-loaded', this.main.bind(this));
    }
    fetchAndSaveConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield EventsManager_1.EventsManager.getConfig(this.customerId);
            localStorage.setItem('acmeConfig', JSON.stringify(config));
            return config;
        });
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            let config = JSON.parse(localStorage.getItem('acmeConfig') || '{}');
            if (!config.SDK_ENABLED) {
                config = yield this.fetchAndSaveConfig();
                if (!config.SDK_ENABLED) {
                    return;
                }
            }
            this.collectors = [
                new ScreenWidthCollector_1.ScreenWidthCollector(config.COLLECTORS_INTERVAL),
                new ScreenHeightCollector_1.ScreenHeightCollector(config.COLLECTORS_INTERVAL),
                new LanguageCollector_1.LanguageCollector(config.COLLECTORS_INTERVAL),
                new UserAgentCollector_1.UserAgentCollector(config.COLLECTORS_INTERVAL),
                new TimezoneCollector_1.TimezoneCollector(config.COLLECTORS_INTERVAL),
                new ClipboardCollector_1.ClipboardCollector(config.COLLECTORS_INTERVAL),
                new NetworkInformationCollector_1.NetworkInformationCollector(config.COLLECTORS_INTERVAL),
                new ReferrerCollector_1.ReferrerCollector(config.COLLECTORS_INTERVAL),
                new CookiesEnabledCollector_1.CookiesEnabledCollector(config.COLLECTORS_INTERVAL),
                new OnlineStatusCollector_1.OnlineStatusCollector(config.COLLECTORS_INTERVAL),
                new LocalStorageAvailableCollector_1.LocalStorageAvailableCollector(config.COLLECTORS_INTERVAL),
                new JavaScriptEnabledCollector_1.JavaScriptEnabledCollector(config.COLLECTORS_INTERVAL),
                new BrowserInfoCollector_1.BrowserInfoCollector(config.COLLECTORS_INTERVAL),
                new PlatformCollector_1.PlatformCollector(config.COLLECTORS_INTERVAL),
                new DeviceMemoryCollector_1.DeviceMemoryCollector(config.COLLECTORS_INTERVAL),
                new HardwareConcurrencyCollector_1.HardwareConcurrencyCollector(config.COLLECTORS_INTERVAL),
                new PluginsCollector_1.PluginsCollector(config.COLLECTORS_INTERVAL),
                new GeolocationCollector_1.GeolocationCollector(config.COLLECTORS_INTERVAL),
                new DoNotTrackCollector_1.DoNotTrackCollector(config.COLLECTORS_INTERVAL),
                new BatteryInfoCollector_1.BatteryInfoCollector(config.COLLECTORS_INTERVAL),
                new CurrentUrlCollector_1.CurrentUrlCollector(config.COLLECTORS_INTERVAL),
                new HistoryLengthCollector_1.HistoryLengthCollector(config.COLLECTORS_INTERVAL),
                new ColorDepthCollector_1.ColorDepthCollector(config.COLLECTORS_INTERVAL),
                new TouchSupportCollector_1.TouchSupportCollector(config.COLLECTORS_INTERVAL),
                new DeviceMotionCollector_1.DeviceMotionCollector(config.COLLECTORS_INTERVAL, config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS),
                new MouseMoveCollector_1.MouseMoveCollector(config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS),
                new KeyUpCollector_1.KeyUpCollector(config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS),
                new ClickCollector_1.ClickCollector(config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS),
                new DeviceOrientationCollector_1.DeviceOrientationCollector(config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS)
            ];
            this.collectors.forEach(collector => collector.startCollect());
            setInterval(() => __awaiter(this, void 0, void 0, function* () {
                const data = {};
                this.collectors.forEach(collector => {
                    data[collector.getKey()] = collector.getData();
                });
                console.log(data); // הדפסת הנתונים לקונסול
                yield EventsManager_1.EventsManager.updateData(data);
                config = yield this.fetchAndSaveConfig();
            }), config.COLLECTORS_INTERVAL);
        });
    }
}
new SDK('YOUR_CUSTOMER_ID');
