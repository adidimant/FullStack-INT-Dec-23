import { EventsManager } from './managers/EventsManager';
import { Collector } from './interfaces/Collector';
import { ContinuousCollector } from './interfaces/ContinuousCollector';
import { ScreenWidthCollector } from './collectors/regular/ScreenWidthCollector';
import { ScreenHeightCollector } from './collectors/regular/ScreenHeightCollector';
import { LanguageCollector } from './collectors/regular/LanguageCollector';
import { UserAgentCollector } from './collectors/regular/UserAgentCollector';
import { TimezoneCollector } from './collectors/regular/TimezoneCollector';
import { CookiesEnabledCollector } from './collectors/regular/CookiesEnabledCollector';
import { JavaScriptEnabledCollector } from './collectors/regular/JavaScriptEnabledCollector';
import { OnlineStatusCollector } from './collectors/regular/OnlineStatusCollector';
import { ReferrerCollector } from './collectors/regular/ReferrerCollector';
import { LocalStorageAvailableCollector } from './collectors/regular/LocalStorageAvailableCollector';
import { BrowserInfoCollector } from './collectors/regular/BrowserInfoCollector';
import { PlatformCollector } from './collectors/regular/PlatformCollector';
import { HardwareConcurrencyCollector } from './collectors/regular/HardwareConcurrencyCollector';
import { PluginsCollector } from './collectors/regular/PluginsCollector';
import { DoNotTrackCollector } from './collectors/regular/DoNotTrackCollector';
import { ColorDepthCollector } from './collectors/regular/ColorDepthCollector';
import { TouchSupportCollector } from './collectors/regular/TouchSupportCollector';
import { CurrentUrlCollector } from './collectors/regular/CurrentUrlCollector';
import { HistoryLengthCollector } from './collectors/regular/HistoryLengthCollector';
import { WindowSizeCollector } from './collectors/regular/WindowSizeCollector';
import { ScreenOrientationCollector } from './collectors/regular/ScreenOrientationCollector';
import { VideoSupportCollector } from './collectors/regular/VideoSupportCollector';
import { MouseMoveCollector } from './collectors/continuous/MouseMoveCollector';
import { KeyboardPressCollector } from './collectors/continuous/KeyboardPressCollector';
import { ClicksCollector } from './collectors/continuous/ClicksCollector';
import { ScrollCollector } from './collectors/continuous/ScrollCollector';
import { ResizeCollector } from './collectors/continuous/ResizeCollector';
import { VisibilityChangeCollector } from './collectors/continuous/VisibilityChangeCollector';

type RegularCollectorConstructor = new (interval: number) => Collector<any>;
type ContinuousCollectorConstructor = new (interval: number, bufferSize: number) => ContinuousCollector<any>;
type AnyCollector = Collector<any> | ContinuousCollector<any>;

export class AcmeCyberSDK {
  private collectors: AnyCollector[] = [];
  private eventsManager: EventsManager;

  constructor() {
    this.eventsManager = EventsManager.getInstance();
  }

  private async initializeCollectors() {
    const config = await this.eventsManager.getConfig();
    const regularCollectors: RegularCollectorConstructor[] = [
      ScreenWidthCollector, ScreenHeightCollector, LanguageCollector,
      UserAgentCollector, TimezoneCollector, CookiesEnabledCollector,
      JavaScriptEnabledCollector, OnlineStatusCollector, ReferrerCollector,
      LocalStorageAvailableCollector, BrowserInfoCollector, PlatformCollector,
      HardwareConcurrencyCollector, PluginsCollector, DoNotTrackCollector,
      ColorDepthCollector, TouchSupportCollector, CurrentUrlCollector,
      HistoryLengthCollector, WindowSizeCollector, ScreenOrientationCollector,
      VideoSupportCollector
    ];

    const continuousCollectors: ContinuousCollectorConstructor[] = [
      MouseMoveCollector, KeyboardPressCollector, ClicksCollector,
      ScrollCollector, ResizeCollector, VisibilityChangeCollector
    ];

    this.collectors = [
      ...regularCollectors.map(CollectorClass => {
        try {
          return new CollectorClass(config.COLLECTORS_INTERVAL);
        } catch (error) {
          console.error(`Failed to initialize ${CollectorClass.name}:`, error);
          return null;
        }
      }),
      ...continuousCollectors.map(CollectorClass => {
        try {
          return new CollectorClass(config.COLLECTORS_INTERVAL, config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS);
        } catch (error) {
          console.error(`Failed to initialize ${CollectorClass.name}:`, error);
          return null;
        }
      })
    ].filter((collector): collector is AnyCollector => collector !== null);
  }

  public async start() {
    const config = await this.eventsManager.getConfig();
    if (config.SDK_ENABLED) {
      await this.initializeCollectors();
      this.collectors.forEach(collector => {
        try {
          collector.startCollect();
        } catch (error) {
          console.error(`Failed to start ${collector.getKey()} collector:`, error);
        }
      });
      this.scheduleDataUpdate();
    }
  }

  private async scheduleDataUpdate() {
    const config = await this.eventsManager.getConfig();
    setInterval(async () => {
      const data: { [key: string]: any } = {};
      for (const collector of this.collectors) {
        try {
          data[collector.getKey()] = collector.getData();
        } catch (error) {
          console.error(`Error collecting data from ${collector.getKey()}:`, error);
          data[collector.getKey()] = null;
        }
      }
      try {
        await this.eventsManager.updateData(data);
      } catch (error) {
        console.error('Failed to update data:', error);
      }
    }, config.COLLECTORS_INTERVAL);
  }
}

document.addEventListener('acme-sdk-loaded', async () => {
  const sdk = new AcmeCyberSDK();
  await sdk.start();
});

document.dispatchEvent(new CustomEvent('acme-sdk-loaded'));