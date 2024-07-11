import {
  RegularCollectorBaseClass,
  ContinuousCollectorBaseClass,
} from "./collectors-base-classes.js";
import * as data from "./variables.js";

export class ScreenWidthCollector extends RegularCollectorBaseClass<number> {
  constructor() {
    super();
  }
  public getData(state: string): number | null {
    if (state == "start") {
      return data.screenWidth;
    }
    return null;
  }
}

export class ScreenHeightCollector extends RegularCollectorBaseClass<number> {
  constructor() {
    super();
  }
  public getData(state: string): number | null {
    if (state == "start") {
      return data.screenHeight;
    }
    return null;
  }
}

export class LanguageCollector extends RegularCollectorBaseClass<string> {
  constructor() {
    super();
  }
  public getData(state: string): string | null {
    if (state == "start") {
      return data.language;
    }
    return null;
  }
}

export class UserAgentCollector extends RegularCollectorBaseClass<string> {
  constructor() {
    super();
  }
  public getData(state: string): string | null {
    if (state == "start") {
      return data.userAgent;
    }
    return null;
  }
}

export class TimeZoneCollector extends RegularCollectorBaseClass<string> {
  constructor() {
    super();
  }
  public getData(state: string): string | null {
    if (state == "start") {
      return data.timeZone;
    }
    return null;
  }
}

export class CookiesEnabledCollector extends RegularCollectorBaseClass<boolean> {
  constructor() {
    super();
  }
  public getData(state: string): boolean | null {
    if (state == "start") {
      return data.cookiesEnabled;
    }
    return null;
  }
}

export class JavaScriptEnabledCollector extends RegularCollectorBaseClass<boolean> {
  constructor() {
    super();
  }
  public getData(state: string): boolean | null {
    if (state == "start") {
      return data.javaScriptEnabled;
    }
    return null;
  }
}

export class OnlineStatusCollector extends RegularCollectorBaseClass<boolean> {
  constructor() {
    super();
  }
  public getData(state: string): boolean | null {
    if (state == "start") {
      return data.onlineStatus;
    }
    return null;
  }
}

export class ReferrerCollector extends RegularCollectorBaseClass<string> {
  constructor() {
    super();
  }
  public getData(state: string): string | null {
    if (state == "start") {
      return data.referrer;
    }
    return null;
  }
}

export class LocalStorageAvailableCollector extends RegularCollectorBaseClass<boolean> {
  constructor() {
    super();
  }
  public getData(state: string): boolean | null {
    if (state == "start") {
      return data.localStorageAvailable;
    }
    return null;
  }
}

export class GetNetworkInformationCollector extends RegularCollectorBaseClass<Promise<any>> {
  constructor() {
    super();
  }
  public getData(state: string): Promise<any> | null {
    if (state == "start") {
      return data.getNetworkInformation();
    }
    return null;
  }
}

export class ClipboardCollector extends RegularCollectorBaseClass<Clipboard> {
  constructor() {
    super();
  }
  public getData(state: string): Clipboard | null {
    if (state == "start") {
      return data.clipboard;
    }
    return null;
  }
}

export class ConnectionCollector extends RegularCollectorBaseClass<Connection> {
  constructor() {
    super();
  }
  public getData(state: string): Connection | null {
    if (state == "start") {
      return data.connection;
    }
    return null;
  }
}

export class BrowserInfoCollector extends RegularCollectorBaseClass<string> {
  constructor() {
    super();
  }
  public getData(state: string): string | null {
    if (state == "start") {
      return data.browserInfo;
    }
    return null;
  }
}

export class PlatformCollector extends RegularCollectorBaseClass<number | string> {
  constructor() {
    super();
  }
  public getData(state: string): number | string | null {
    if (state == "start") {
      return data.platform;
    }
    return null;
  }
}

export class HardwareConcurrencyCollector extends RegularCollectorBaseClass<number> {
  constructor() {
    super();
  }
  public getData(state: string): number | null {
    if (state == "start") {
      return data.hardwareConcurrency;
    }
    return null;
  }
}

export class PluginsCollector extends RegularCollectorBaseClass<string[]> {
  constructor() {
    super();
  }
  public getData(state: string): string[] | null {
    if (state == "start") {
      return data.plugins;
    }
    return null;
  }
}

export class GetLocationCollector extends RegularCollectorBaseClass<void> {
  constructor() {
    super();
  }
  public getData(state: string): void | null {
    if (state == "start") {
      return data.getLocation;
    }
    return null;
  }
}

export class DoNotTrackCollector extends RegularCollectorBaseClass<string | undefined | null> {
  constructor() {
    super();
  }
  public getData(state: string): string | undefined | null {
    if (state == "start") {
      return data.doNotTrack;
    }
    return null;
  }
}

export class GetBatteryCollector extends RegularCollectorBaseClass<Promise<any>> {
  constructor() {
    super();
  }
  public getData(state: string): Promise<any> | null {
    if (state == "start") {
      return data.getBattery;
    }
    return null;
  }
}

export class CurrrentUrlCollector extends RegularCollectorBaseClass<string> {
  constructor() {
    super();
  }
  public getData(state: string): string | null {
    if (state == "start") {
      return data.currentUrl;
    }
    return null;
  }
}

export class HistoryLengthCollector extends RegularCollectorBaseClass<number> {
  constructor() {
    super();
  }
  public getData(state: string): number | null {
    if (state == "start") {
      return data.historyLength;
    }
    return null;
  }
}

export class ColorDepthCollector extends RegularCollectorBaseClass<number> {
  constructor() {
    super();
  }
  public getData(state: string): number | null {
    if (state == "start") {
      return data.colorDepth;
    }
    return null;
  }
}

export class TouchSupportCollector extends RegularCollectorBaseClass<boolean> {
  constructor() {
    super();
  }
  public getData(state: string): boolean | null {
    if (state == "start") {
      return data.touchSupport;
    }
    return null;
  }
}
