"use strict";
import { ScreenWidthCollector } from "../Collector/ScreenCollector";
import { ScreenHeightCollector } from "../Collector/ScreenCollector";
import { LanguageCollector } from "../Collector/LanguageCollector";
import { UserAgentCollector } from "../Collector/UserAgentCollector";
import { TimeZoneCollector } from "../Collector/TimeZoneCollector";
import { CookiesEnabledCollector } from "../Collector/CookiesEnabledCollector";
import { JavaScriptEnabledCollector } from "../Collector/JavaScriptEnabledCollector";
import { OnlineStatusCollector } from "../Collector/OnlineStatusCollector";
import { ReferrerCollector } from "../Collector/ReferrerCollector";
import { LocalStorageEnabledCollector } from "../Collector/LocalStorageEnabledCollector";
import { NetworkInformationCollector } from "../Collector/NetworkInformationCollector";
import { ClipboardCollector } from "../Collector/ClipboardCollector";
import { BrowserInfoCollector } from "../Collector/BrowserInfoCollector";
import { PlatformCollector } from "../Collector/PlatformCollector";
import { DeviceMemoryCollector } from "../Collector/DeviceMemoryCollector";
import { HardwareConcurrencyCollector } from "../Collector/HardwareConcurrencyCollector";
import { PluginsCollector } from "../Collector/PluginsCollector";
import { GeolocationCollector } from "../Collector/GeolocationCollector";
import { DoNotTrackCollector } from "../Collector/DoNotTrackCollector";
import { BatteryInfoCollector } from "../Collector/BatteryInfoCollector";
import { CurrentUrlCollector } from "../Collector/CurrentUrlCollector";
import { HistoryLengthCollector } from "../Collector/HistoryLengthCollector";
import { ColorDepthCollector } from "../Collector/ColorDepthCollector";
import { TouchSupportCollector } from "../Collector/TouchSupportCollector";
import { MouseMoveCollector } from "../Collector/MouseMoveCollector";
import { KeyUpCollector } from "../Collector/KeyUpCollector";
import { ClickCollector } from "../Collector/ClickCollector";
import { DeviceMotionCollector } from "../Collector/DeviceMotionCollector";
import { DeviceOrientationCollector } from "../Collector/DeviceOrientationCollector";
import { EventsManager } from "../collector/EventsManager";

class Main {
    constructor() {
        this.collectors = [];
    }

    init() {
        document.addEventListener('acme-sdk-loaded', () => {
            this.collectors.forEach(collector => {
                collector.startCollect();
            });
        });

        setInterval(() => {
            this.collectors.forEach(collector => {
                const data = collector.getData();
                if (data) {
                    const key = collector.getKey();
                    const dataObject = { [key]: data };
                    EventsManager.updateData(dataObject);
                }
            });
        }, 60000);
    }

    addCollector(collector) {
        this.collectors.push(collector);
    }
}

export { Main };

const main = new Main();
main.addCollector(new ScreenWidthCollector(60000));
main.addCollector(new ScreenHeightCollector(60000));
main.addCollector(new LanguageCollector(60000));
main.addCollector(new UserAgentCollector(60000));
main.addCollector(new TimeZoneCollector(60000));
main.addCollector(new CookiesEnabledCollector(60000));
main.addCollector(new JavaScriptEnabledCollector(60000));
main.addCollector(new OnlineStatusCollector(60000));
main.addCollector(new ReferrerCollector(60000));
main.addCollector(new LocalStorageEnabledCollector(60000));
main.addCollector(new NetworkInformationCollector(60000));
main.addCollector(new ClipboardCollector(60000));
main.addCollector(new BrowserInfoCollector(60000));
main.addCollector(new PlatformCollector(60000));
main.addCollector(new DeviceMemoryCollector(60000));
main.addCollector(new HardwareConcurrencyCollector(60000));
main.addCollector(new PluginsCollector(60000));
main.addCollector(new GeolocationCollector(60000));
main.addCollector(new DoNotTrackCollector(60000));
main.addCollector(new BatteryInfoCollector(60000));
main.addCollector(new CurrentUrlCollector(60000));
main.addCollector(new HistoryLengthCollector(60000));
main.addCollector(new ColorDepthCollector(60000));
main.addCollector(new TouchSupportCollector(60000));
main.addCollector(new MouseMoveCollector(60000, 50));
main.addCollector(new KeyUpCollector(60000, 50));
main.addCollector(new ClickCollector(60000, 10));
main.addCollector(new DeviceMotionCollector(60000, 40));
main.addCollector(new DeviceOrientationCollector(60000, 40));
main.init();
