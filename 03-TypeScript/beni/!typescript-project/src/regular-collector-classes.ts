import {
  RegularCollectorBaseClass,
  ContinuousCollectorBaseClass,
} from "./collectors-base-classes.js";
import * as globalObj from "./variables.js";

export class ScreenWidthCollector extends RegularCollectorBaseClass<number> {
  protected data: number | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): number | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.screenWidth;
  }
}

export class ScreenHeightCollector extends RegularCollectorBaseClass<number> {
  protected data: number | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): number | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.screenHeight;
  }
}

export class LanguageCollector extends RegularCollectorBaseClass<string> {
  protected data: string | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): string | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.language;
  }
}

export class UserAgentCollector extends RegularCollectorBaseClass<string> {
  protected data: string | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): string | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.userAgent;
  }
}

export class TimeZoneCollector extends RegularCollectorBaseClass<string> {
  protected data: string | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): string | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.timeZone;
  }
}

export class CookiesEnabledCollector extends RegularCollectorBaseClass<boolean> {
  protected data: boolean | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): boolean | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.cookiesEnabled;
  }
}

export class JavaScriptEnabledCollector extends RegularCollectorBaseClass<boolean> {
  protected data: boolean | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): boolean | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.javaScriptEnabled;
  }
}

export class OnlineStatusCollector extends RegularCollectorBaseClass<boolean> {
  protected data: boolean | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): boolean | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.onlineStatus;
  }
}

export class ReferrerCollector extends RegularCollectorBaseClass<string> {
  protected data: string | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): string | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.referrer;
  }
}

export class LocalStorageAvailableCollector extends RegularCollectorBaseClass<boolean> {
  protected data: boolean | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): boolean | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.localStorageAvailable;
  }
}

export class GetNetworkInformationCollector extends RegularCollectorBaseClass<Promise<any>> {
  protected data: Promise<any> | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): Promise<any> | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.getNetworkInformation();
  }
}

export class ClipboardCollector extends RegularCollectorBaseClass<Clipboard> {
  protected data: Clipboard | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): Clipboard | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.clipboard;
  }
}

export class ConnectionCollector extends RegularCollectorBaseClass<Connection> {
  protected data: Connection | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): Connection | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.connection;
  }
}

export class BrowserInfoCollector extends RegularCollectorBaseClass<string> {
  protected data: string | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): string | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.browserInfo;
  }
}

export class PlatformCollector extends RegularCollectorBaseClass<number | string> {
  protected data: number | string | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): number | string | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }

  public startCollect(): void {
    this.data = globalObj.platform;
  }
}

export class HardwareConcurrencyCollector extends RegularCollectorBaseClass<number> {
  protected data: number | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): number | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.hardwareConcurrency;
  }
}

export class PluginsCollector extends RegularCollectorBaseClass<string[]> {
  protected data: string[] | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): string[] | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.plugins;
  }
}

export class GetLocationCollector extends RegularCollectorBaseClass<void> {
  protected data: void | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): void | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.getLocation;
  }
}

export class DoNotTrackCollector extends RegularCollectorBaseClass<string | undefined | null> {
  protected data: string | undefined | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): string | undefined | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.doNotTrack;
  }
}

export class GetBatteryCollector extends RegularCollectorBaseClass<Promise<any>> {
  protected data: Promise<any> | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): Promise<any> | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.getBattery;
  }
}

export class CurrrentUrlCollector extends RegularCollectorBaseClass<string> {
  protected data: string | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): string | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.currentUrl;
  }
}

export class HistoryLengthCollector extends RegularCollectorBaseClass<number> {
  protected data: number | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): number | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.historyLength;
  }
}

export class ColorDepthCollector extends RegularCollectorBaseClass<number> {
  protected data: number | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): number | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.colorDepth;
  }
}

export class TouchSupportCollector extends RegularCollectorBaseClass<boolean> {
  protected data: boolean | null;
  constructor() {
    super();
    this.data = null;
  }
  getData(): boolean | null {
    console.log(this.constructor.name + ": " + this.data);
    return this.data;
  }
  startCollect(): void {
    this.data = globalObj.touchSupport;
  }
}
