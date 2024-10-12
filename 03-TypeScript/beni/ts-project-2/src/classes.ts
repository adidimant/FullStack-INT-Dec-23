import { CollectorInterface, ContinuousCollectorInterface } from "./interfaces";

// --------------- START OF REGULAR COLLECTORS ----------------------------
export class ScreenWidth implements CollectorInterface<number> {
  public intervalCount: number;
  private name: string;
  private data: number | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Screen Width";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): number | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = screen.width;
    this.intervalFn = setInterval(() => {
      this.data = screen.width;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class ScreenHeight implements CollectorInterface<number> {
  public intervalCount: number;
  private name: string;
  private data: number | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Screen Height";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): number | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = screen.height;
    this.intervalFn = setInterval(() => {
      this.data = screen.height;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class Language implements CollectorInterface<string> {
  public intervalCount: number;
  private name: string;
  private data: string | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Language";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = navigator.language || navigator.userLanguage;
    this.intervalFn = setInterval(() => {
      this.data = navigator.language || navigator.userLanguage;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class UserAgent implements CollectorInterface<string> {
  public intervalCount: number;
  private name: string;
  private data: string | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "User Agent";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = navigator.userAgent;
    this.intervalFn = setInterval(() => {
      this.data = navigator.userAgent;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class TimeZone implements CollectorInterface<string> {
  public intervalCount: number;
  private name: string;
  private data: string | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Time Zone";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.intervalFn = setInterval(() => {
      this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class CookiesEnabled implements CollectorInterface<boolean> {
  public intervalCount: number;
  private name: string;
  private data: boolean | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Cookies Enabled";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): boolean | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = navigator.cookieEnabled;
    this.intervalFn = setInterval(() => {
      this.data = navigator.cookieEnabled;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class JavaEnabled implements CollectorInterface<boolean> {
  public intervalCount: number;
  private name: string;
  private data: boolean | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Java Enabled";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): boolean | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = typeof navigator.javaEnabled === "function" && navigator.javaEnabled();
    this.intervalFn = setInterval(() => {
      this.data = typeof navigator.javaEnabled === "function" && navigator.javaEnabled();
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class OnlineStatus implements CollectorInterface<boolean> {
  public intervalCount: number;
  private name: string;
  private data: boolean | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Online Status";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): boolean | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = navigator.onLine;
    this.intervalFn = setInterval(() => {
      this.data = navigator.onLine;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class Referrer implements CollectorInterface<string> {
  public intervalCount: number;
  private name: string;
  private data: string | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Referrer";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = document.referrer;
    this.intervalFn = setInterval(() => {
      this.data = document.referrer;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class LocalStorageAvailable implements CollectorInterface<boolean> {
  public intervalCount: number;
  private name: string;
  private data: boolean | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Local Storage Available";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): boolean | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = typeof Storage !== "undefined";
    this.intervalFn = setInterval(async () => {
      this.data = typeof Storage !== "undefined";
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class GetNetworkInformation implements CollectorInterface<Connection> {
  public intervalCount: number;
  private name: string;
  private data: Connection | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Network Information";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): Connection | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  private async getNetworkInformation(): Promise<Connection | null> {
    return new Promise((resolve) => {
      const connection =
        navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      resolve(connection as unknown as Connection | null);
    });
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    const info: { [key: string]: any } | null = await this.getNetworkInformation();
    const obj: { [key: string]: any } | null = {};
    for (let key in info) {
      obj[key] = info[key];
    }
    this.data = obj as Connection | null;
    this.intervalFn = setInterval(async () => {
      this.data = obj as Connection | null;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class Clipboard implements CollectorInterface<Clipboard> {
  public intervalCount: number;
  private name: string;
  private data: Clipboard | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Clipboard";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): Clipboard | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = navigator.clipboard as unknown as Clipboard;
    this.intervalFn = setInterval(async () => {
      this.data = navigator.clipboard as unknown as Clipboard;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class Connection implements CollectorInterface<Connection> {
  public intervalCount: number;
  private name: string;
  private data: Connection | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Connection";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): Connection | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    const info: { [key: string]: any } = navigator.connection;
    const obj: { [key: string]: any } = {};
    for (let key in info) {
      obj[key] = info[key];
    }
    this.data = obj as Connection;
    this.intervalFn = setInterval(async () => {
      this.data = obj as Connection;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class BrowserInfo implements CollectorInterface<string> {
  public intervalCount: number;
  private name: string;
  private data: string | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Browser Info";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    const getBroswerInfo = (function () {
      const ua = navigator.userAgent;
      let tem: any;
      let M = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return "IE " + (tem[1] || "");
      }
      if (M[1] === "Chrome") {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera");
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
      return M.join(" ");
    })();
    this.data = getBroswerInfo;
    this.intervalFn = setInterval(async () => {
      this.data = getBroswerInfo;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class Platform implements CollectorInterface<string> {
  public intervalCount: number;
  private name: string;
  private data: string | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Platform";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = navigator.platform;
    this.intervalFn = setInterval(async () => {
      this.data = navigator.platform;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class DeviceMemory implements CollectorInterface<string | number> {
  public intervalCount: number;
  private name: string;
  private data: string | number | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Device Memory";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): string | number | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = navigator.deviceMemory || "unknown";
    this.intervalFn = setInterval(async () => {
      this.data = navigator.deviceMemory || "unknown";
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class HardwareConcurrency implements CollectorInterface<number> {
  public intervalCount: number;
  private name: string;
  private data: number | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Hardware Concurrency";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): number | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = navigator.hardwareConcurrency;
    this.intervalFn = setInterval(async () => {
      this.data = navigator.hardwareConcurrency;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class Plugins implements CollectorInterface<string[]> {
  public intervalCount: number;
  private name: string;
  private data: string[] | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Plugins";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): string[] | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = Array.from(navigator.plugins).map((plugin) => plugin.name);
    this.intervalFn = setInterval(async () => {
      this.data = Array.from(navigator.plugins).map((plugin) => plugin.name);
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class Geolocation implements CollectorInterface<string> {
  public intervalCount: number;
  private name: string;
  private data: string | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Geolocation";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  getGeolocation = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(`Geolocation: ${position.coords.latitude}, ${position.coords.longitude}`);
        },
        (error) => {
          reject(`Geolocation Error: ${error.message}`);
        }
      );
    });
  };

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    const info = await this.getGeolocation().catch((err) => `${err}`);
    this.data = info;
    this.intervalFn = setInterval(async () => {
      this.data = info;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class DoNotTrack implements CollectorInterface<string | null | undefined> {
  public intervalCount: number;
  private name: string;
  private data: string | null | undefined;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Do Not Track";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): string | null | undefined {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
    this.intervalFn = setInterval(async () => {
      this.data = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class Battery implements CollectorInterface<{ [key: string]: any }> {
  public intervalCount: number;
  private name: string;
  private data: { [key: string]: any } | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Battery";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): { [key: string]: any } | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    const info = await navigator.getBattery();
    const obj: { [key: string]: any } = {};
    for (let key in info) {
      obj[key] = info[key];
    }
    this.data = obj;
    this.intervalFn = setInterval(async () => {
      this.data = obj;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class CurrentURL implements CollectorInterface<string> {
  public intervalCount: number;
  private name: string;
  private data: string | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Current URL";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = window.location.href;
    this.intervalFn = setInterval(async () => {
      this.data = window.location.href;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class HistoryLength implements CollectorInterface<number> {
  public intervalCount: number;
  private name: string;
  private data: number | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "History Length";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): number | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = window.history.length;
    this.intervalFn = setInterval(async () => {
      this.data = window.history.length;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class ColorDepth implements CollectorInterface<number> {
  public intervalCount: number;
  private name: string;
  private data: number | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Color Depth";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): number | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data = screen.colorDepth;
    this.intervalFn = setInterval(async () => {
      this.data = screen.colorDepth;
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}

export class TouchSupport implements CollectorInterface<boolean | number> {
  public intervalCount: number;
  private name: string;
  private data: boolean | number | null;
  private intervalFn: number | null;

  constructor(intervalCount: number) {
    this.intervalCount = intervalCount;
    this.name = "Touch Support";
    this.data = null;
    this.intervalFn = null;
  }

  getData(): boolean | number | null {
    return this.data;
  }

  getKey(): string {
    return this.name;
  }

  async startCollect(): Promise<void> {
    console.log(`Started collecting data for ${this.name}`);
    this.data =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      !!(navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0);
    this.intervalFn = setInterval(async () => {
      this.data =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        !!(navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0);
    }, this.intervalCount) as unknown as number;
  }

  finishCollect(): void {
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
    }
    console.log(`Finished collecting data for: ${this.name}`);
  }
}
// --------------- END OF REGULAR COLLECTORS ----------------------------

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// --------------- START OF CONTINUOUS COLLECTORS ----------------------------

// --------------- END OF CONTINUOUS COLLECTORS ------------------------------
