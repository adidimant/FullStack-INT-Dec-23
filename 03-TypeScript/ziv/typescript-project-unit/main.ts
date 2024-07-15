import { EventsManager } from './EventsManager';
import { Collector } from './Collector';
import { ScreenWidthCollector } from './ScreenWidthCollector';
import { ScreenHeightCollector } from './ScreenHeightCollector';
import { LanguageCollector } from './LanguageCollector';
import { UserAgentCollector } from './UserAgentCollector';
import { TimezoneCollector } from './TimezoneCollector';
import { ClipboardCollector } from './ClipboardCollector';
import { NetworkInformationCollector } from './NetworkInformationCollector';
import { ReferrerCollector } from './ReferrerCollector';
import { CookiesEnabledCollector } from './CookiesEnabledCollector';
import { OnlineStatusCollector } from './OnlineStatusCollector';
import { LocalStorageAvailableCollector } from './LocalStorageAvailableCollector';
import { JavaScriptEnabledCollector } from './JavaScriptEnabledCollector';
import { BrowserInfoCollector } from './BrowserInfoCollector';
import { PlatformCollector } from './PlatformCollector';
import { DeviceMemoryCollector } from './DeviceMemoryCollector';
import { HardwareConcurrencyCollector } from './HardwareConcurrencyCollector';
import { PluginsCollector } from './PluginsCollector';
import { GeolocationCollector } from './GeolocationCollector';
import { DoNotTrackCollector } from './DoNotTrackCollector';
import { BatteryInfoCollector } from './BatteryInfoCollector';
import { CurrentUrlCollector } from './CurrentUrlCollector';
import { HistoryLengthCollector } from './HistoryLengthCollector'; 
import { ColorDepthCollector } from './ColorDepthCollector';
import { TouchSupportCollector } from './TouchSupportCollector';
import { DeviceMotionCollector } from './DeviceMotionCollector';
import { MouseMoveCollector } from './MouseMoveCollector';
import { KeyUpCollector } from './KeyUpCollector';
import { ClickCollector } from './ClickCollector';
import { DeviceOrientationCollector } from './DeviceOrientationCollector';




class SDK {
    private collectors: Collector<any>[];
    private customerId: string;

    constructor(customerId: string) {
        this.collectors = [];
        this.customerId = customerId;
        window.addEventListener('acme-sdk-loaded', this.main.bind(this));
    }

    private async fetchAndSaveConfig() {
        const config = await EventsManager.getConfig(this.customerId);
        localStorage.setItem('acmeConfig', JSON.stringify(config));
        return config;
    }

    private async main() {
        let config = JSON.parse(localStorage.getItem('acmeConfig') || '{}');
        if (!config.SDK_ENABLED) {
            config = await this.fetchAndSaveConfig();
            if (!config.SDK_ENABLED) {
                return;
            }
        }

        this.collectors = [
            new ScreenWidthCollector(config.COLLECTORS_INTERVAL),
            new ScreenHeightCollector(config.COLLECTORS_INTERVAL),
            new LanguageCollector(config.COLLECTORS_INTERVAL),
            new UserAgentCollector(config.COLLECTORS_INTERVAL),
            new TimezoneCollector(config.COLLECTORS_INTERVAL),
            new ClipboardCollector(config.COLLECTORS_INTERVAL),
            new NetworkInformationCollector(config.COLLECTORS_INTERVAL),
            new ReferrerCollector(config.COLLECTORS_INTERVAL),
            new CookiesEnabledCollector(config.COLLECTORS_INTERVAL),
            new OnlineStatusCollector(config.COLLECTORS_INTERVAL),
            new LocalStorageAvailableCollector(config.COLLECTORS_INTERVAL),
            new JavaScriptEnabledCollector(config.COLLECTORS_INTERVAL),
            new BrowserInfoCollector(config.COLLECTORS_INTERVAL),
            new PlatformCollector(config.COLLECTORS_INTERVAL),
            new DeviceMemoryCollector(config.COLLECTORS_INTERVAL), 
            new HardwareConcurrencyCollector(config.COLLECTORS_INTERVAL),
            new PluginsCollector(config.COLLECTORS_INTERVAL),
            new GeolocationCollector(config.COLLECTORS_INTERVAL), 
            new DoNotTrackCollector(config.COLLECTORS_INTERVAL),
            new BatteryInfoCollector(config.COLLECTORS_INTERVAL),
            new CurrentUrlCollector(config.COLLECTORS_INTERVAL),
            new HistoryLengthCollector(config.COLLECTORS_INTERVAL),
            new ColorDepthCollector(config.COLLECTORS_INTERVAL),
            new TouchSupportCollector(config.COLLECTORS_INTERVAL),
            new DeviceMotionCollector(config.COLLECTORS_INTERVAL, config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS),
            new MouseMoveCollector(config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS),
            new KeyUpCollector(config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS),
            new ClickCollector(config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS),
            new DeviceOrientationCollector(config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS)
        ];

         this.collectors.forEach(collector => collector.startCollect());

        setInterval(async () => {
            const data: Record<string, any> = {};
            this.collectors.forEach(collector => {
                data[collector.getKey()] = collector.getData();
            });
            console.log(data); // הדפסת הנתונים לקונסול
            await EventsManager.updateData(data);
            config = await this.fetchAndSaveConfig();
        }, config.COLLECTORS_INTERVAL);
    }
}

new SDK('YOUR_CUSTOMER_ID');
