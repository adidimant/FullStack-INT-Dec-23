// ts-files/main.ts

import { ScreenWidthCollector } from './collectors/ScreenWidthCollector';
import { ScreenHeightCollector } from './collectors/ScreenHeightCollector';
import { UserAgentCollector } from './collectors/UserAgentCollector';
import { TimeZoneCollector } from './collectors/TimeZoneCollector';
import { CookiesEnabledCollector } from './collectors/CookiesEnabledCollector';
import { JavaScriptEnabledCollector } from './collectors/JavaScriptEnabledCollector';
import { EventsManager } from './events/EventsManager';
import { Collector } from './collectors/Collector';
import { SDKConfig } from './interfaces'; // Import the SDKConfig interface

document.addEventListener('acme-sdk-loaded', () => {
  const config: SDKConfig = EventsManager.getConfig(); // Use SDKConfig type here
  const collectors: Collector<any>[] = [
    new ScreenWidthCollector(),
    new ScreenHeightCollector(),
    new UserAgentCollector(),
    new TimeZoneCollector(),
    new CookiesEnabledCollector(),
    new JavaScriptEnabledCollector(),
  ];

  if (config.SDK_ENABLED) { // Access properties using the interface
    collectors.forEach(collector => collector.startCollect());

    setInterval(() => {
      const data: { [key: string]: any } = {};
      collectors.forEach(collector => {
        const key = collector.getKey();
        data[key] = collector.getData();
      });
      EventsManager.updateData(data);
    }, config.COLLECTORS_INTERVAL);
  }
});

// Dispatch the 'acme-sdk-loaded' event once the script is loaded
window.addEventListener('load', () => {
  const event = new CustomEvent('acme-sdk-loaded');
  document.dispatchEvent(event);
});
