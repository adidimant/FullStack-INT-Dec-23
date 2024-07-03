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
        ];

        this.collectors.forEach(collector => collector.startCollect());

        setInterval(async () => {
            const data: Record<string, any> = {};
            this.collectors.forEach(collector => {
                data[collector.getKey()] = collector.getData();
            });
            await EventsManager.updateData(data);
            config = await this.fetchAndSaveConfig();
        }, config.COLLECTORS_INTERVAL);
    }
}

new SDK('YOUR_CUSTOMER_ID');
