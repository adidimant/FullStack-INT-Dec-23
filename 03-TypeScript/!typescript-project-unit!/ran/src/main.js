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
exports.AcmeCyberSDK = void 0;
const EventsManager_1 = require("./managers/EventsManager");
const ScreenWidthCollector_1 = require("./collectors/regular/ScreenWidthCollector");
const ScreenHeightCollector_1 = require("./collectors/regular/ScreenHeightCollector");
const LanguageCollector_1 = require("./collectors/regular/LanguageCollector");
const UserAgentCollector_1 = require("./collectors/regular/UserAgentCollector");
const TimezoneCollector_1 = require("./collectors/regular/TimezoneCollector");
const CookiesEnabledCollector_1 = require("./collectors/regular/CookiesEnabledCollector");
const JavaScriptEnabledCollector_1 = require("./collectors/regular/JavaScriptEnabledCollector");
const OnlineStatusCollector_1 = require("./collectors/regular/OnlineStatusCollector");
const ReferrerCollector_1 = require("./collectors/regular/ReferrerCollector");
const LocalStorageAvailableCollector_1 = require("./collectors/regular/LocalStorageAvailableCollector");
const BrowserInfoCollector_1 = require("./collectors/regular/BrowserInfoCollector");
const PlatformCollector_1 = require("./collectors/regular/PlatformCollector");
const HardwareConcurrencyCollector_1 = require("./collectors/regular/HardwareConcurrencyCollector");
const PluginsCollector_1 = require("./collectors/regular/PluginsCollector");
const DoNotTrackCollector_1 = require("./collectors/regular/DoNotTrackCollector");
const ColorDepthCollector_1 = require("./collectors/regular/ColorDepthCollector");
const TouchSupportCollector_1 = require("./collectors/regular/TouchSupportCollector");
const CurrentUrlCollector_1 = require("./collectors/regular/CurrentUrlCollector");
const HistoryLengthCollector_1 = require("./collectors/regular/HistoryLengthCollector");
const WindowSizeCollector_1 = require("./collectors/regular/WindowSizeCollector");
const ScreenOrientationCollector_1 = require("./collectors/regular/ScreenOrientationCollector");
const VideoSupportCollector_1 = require("./collectors/regular/VideoSupportCollector");
const MouseMoveCollector_1 = require("./collectors/continuous/MouseMoveCollector");
const KeyboardPressCollector_1 = require("./collectors/continuous/KeyboardPressCollector");
const ClicksCollector_1 = require("./collectors/continuous/ClicksCollector");
const ScrollCollector_1 = require("./collectors/continuous/ScrollCollector");
const ResizeCollector_1 = require("./collectors/continuous/ResizeCollector");
const VisibilityChangeCollector_1 = require("./collectors/continuous/VisibilityChangeCollector");
class AcmeCyberSDK {
    constructor() {
        this.collectors = [];
        this.eventsManager = EventsManager_1.EventsManager.getInstance();
    }
    initializeCollectors() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.eventsManager.getConfig();
            const regularCollectors = [
                ScreenWidthCollector_1.ScreenWidthCollector, ScreenHeightCollector_1.ScreenHeightCollector, LanguageCollector_1.LanguageCollector,
                UserAgentCollector_1.UserAgentCollector, TimezoneCollector_1.TimezoneCollector, CookiesEnabledCollector_1.CookiesEnabledCollector,
                JavaScriptEnabledCollector_1.JavaScriptEnabledCollector, OnlineStatusCollector_1.OnlineStatusCollector, ReferrerCollector_1.ReferrerCollector,
                LocalStorageAvailableCollector_1.LocalStorageAvailableCollector, BrowserInfoCollector_1.BrowserInfoCollector, PlatformCollector_1.PlatformCollector,
                HardwareConcurrencyCollector_1.HardwareConcurrencyCollector, PluginsCollector_1.PluginsCollector, DoNotTrackCollector_1.DoNotTrackCollector,
                ColorDepthCollector_1.ColorDepthCollector, TouchSupportCollector_1.TouchSupportCollector, CurrentUrlCollector_1.CurrentUrlCollector,
                HistoryLengthCollector_1.HistoryLengthCollector, WindowSizeCollector_1.WindowSizeCollector, ScreenOrientationCollector_1.ScreenOrientationCollector,
                VideoSupportCollector_1.VideoSupportCollector
            ];
            const continuousCollectors = [
                MouseMoveCollector_1.MouseMoveCollector, KeyboardPressCollector_1.KeyboardPressCollector, ClicksCollector_1.ClicksCollector,
                ScrollCollector_1.ScrollCollector, ResizeCollector_1.ResizeCollector, VisibilityChangeCollector_1.VisibilityChangeCollector
            ];
            this.collectors = [
                ...regularCollectors.map(CollectorClass => {
                    try {
                        return new CollectorClass(config.COLLECTORS_INTERVAL);
                    }
                    catch (error) {
                        console.error(`Failed to initialize ${CollectorClass.name}:`, error);
                        return null;
                    }
                }),
                ...continuousCollectors.map(CollectorClass => {
                    try {
                        return new CollectorClass(config.COLLECTORS_INTERVAL, config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS);
                    }
                    catch (error) {
                        console.error(`Failed to initialize ${CollectorClass.name}:`, error);
                        return null;
                    }
                })
            ].filter((collector) => collector !== null);
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.eventsManager.getConfig();
            if (config.SDK_ENABLED) {
                yield this.initializeCollectors();
                this.collectors.forEach(collector => {
                    try {
                        collector.startCollect();
                    }
                    catch (error) {
                        console.error(`Failed to start ${collector.getKey()} collector:`, error);
                    }
                });
                this.scheduleDataUpdate();
            }
        });
    }
    scheduleDataUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.eventsManager.getConfig();
            setInterval(() => __awaiter(this, void 0, void 0, function* () {
                const data = {};
                for (const collector of this.collectors) {
                    try {
                        data[collector.getKey()] = collector.getData();
                    }
                    catch (error) {
                        console.error(`Error collecting data from ${collector.getKey()}:`, error);
                        data[collector.getKey()] = null;
                    }
                }
                try {
                    yield this.eventsManager.updateData(data);
                }
                catch (error) {
                    console.error('Failed to update data:', error);
                }
            }), config.COLLECTORS_INTERVAL);
        });
    }
}
exports.AcmeCyberSDK = AcmeCyberSDK;
document.addEventListener('acme-sdk-loaded', () => __awaiter(void 0, void 0, void 0, function* () {
    const sdk = new AcmeCyberSDK();
    yield sdk.start();
}));
document.dispatchEvent(new CustomEvent('acme-sdk-loaded'));
