import {EventsManager} from './EventsManager';
import { ScreenHeightCollector, ScreenWidthCollector , LanguageCollector , UserAgentCollector, TimeZoneCollector, CookiesEnabledCollector, JavaScriptEnabledCollector, OnlineStatusCollector,
    ReferrerCollector, LocalStorageAvailableCollector, NetworkInformationCollector, BrowserInfoCollector,PlatformCollector , DeviceMemoryCollector, HardwareConcurrencyCollector
    , PluginsCollector, DoNotTrackCollector, CurrentUrlCollector, HistoryLengthCollector, ColorDepthCollector
} 
from './collectors/regular-collectors';
import { Collector } from './collectors/interfaceCollectors';
import {} from './collectors/continous- collectors';

function main(customerId: string) {
    document.addEventListener("acme-sdk-loaded",()=>{
        const config = EventsManager.getConfig(customerId);
        if(config.SDK_ENABLED){
            const collectors: Collector<any>[] = [
                new ScreenWidthCollector(config.COLLECTORS_INTERVAL),
                new ScreenHeightCollector(config.COLLECTORS_INTERVAL),
                new LanguageCollector(config.COLLECTORS_INTERVAL),
                new UserAgentCollector(config.COLLECTORS_INTERVAL),
                new TimeZoneCollector(config.COLLECTORS_INTERVAL),
                new CookiesEnabledCollector(config.COLLECTORS_INTERVAL),
                new JavaScriptEnabledCollector(config.COLLECTORS_INTERVAL),
                new OnlineStatusCollector(config.COLLECTORS_INTERVAL),
                new ReferrerCollector(config.COLLECTORS_INTERVAL),
                new LocalStorageAvailableCollector(config.COLLECTORS_INTERVAL),
                new NetworkInformationCollector(config.COLLECTORS_INTERVAL),
                new BrowserInfoCollector(config.COLLECTORS_INTERVAL),
                new PlatformCollector(config.COLLECTORS_INTERVAL),
                new DeviceMemoryCollector(config.COLLECTORS_INTERVAL),
                new HardwareConcurrencyCollector(config.COLLECTORS_INTERVAL),
                new PluginsCollector(config.COLLECTORS_INTERVAL),
                new DoNotTrackCollector(config.COLLECTORS_INTERVAL),
                new CurrentUrlCollector(config.COLLECTORS_INTERVAL),
                new HistoryLengthCollector(config.COLLECTORS_INTERVAL),
                new ColorDepthCollector(config.COLLECTORS_INTERVAL),
            ];
            collectors.forEach(collector => collector.startCollect());

            setInterval(() => {
                const data = collectors.reduce((acc, collector) => {
                  acc[collector.getKey()] = collector.getData();
                  return acc;
                }, {});

                EventsManager.updateData(data);
            }, config.COLLECTORS_INTERVAL);
        }
    })
    const event = new Event('acme-sdk-loaded');
    document.dispatchEvent(event);
};

//main('customer123');