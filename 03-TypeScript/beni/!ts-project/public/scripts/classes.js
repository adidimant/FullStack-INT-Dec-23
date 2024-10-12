// --------------- START OF REGULAR COLLECTORS ----------------------------
export class ScreenWidth {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Screen Width";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = screen.width;
        this.intervalFn = setInterval(() => {
            this.data = screen.width;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class ScreenHeight {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Screen Height";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = screen.height;
        this.intervalFn = setInterval(() => {
            this.data = screen.height;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class Language {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Language";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = navigator.language || navigator.userLanguage;
        this.intervalFn = setInterval(() => {
            this.data = navigator.language || navigator.userLanguage;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class UserAgent {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "User Agent";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = navigator.userAgent;
        this.intervalFn = setInterval(() => {
            this.data = navigator.userAgent;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class TimeZone {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Time Zone";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.intervalFn = setInterval(() => {
            this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class CookiesEnabled {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Cookies Enabled";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = navigator.cookieEnabled;
        this.intervalFn = setInterval(() => {
            this.data = navigator.cookieEnabled;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class JavaEnabled {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Java Enabled";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = typeof navigator.javaEnabled === "function" && navigator.javaEnabled();
        this.intervalFn = setInterval(() => {
            this.data = typeof navigator.javaEnabled === "function" && navigator.javaEnabled();
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class OnlineStatus {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Online Status";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = navigator.onLine;
        this.intervalFn = setInterval(() => {
            this.data = navigator.onLine;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class Referrer {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Referrer";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = document.referrer;
        this.intervalFn = setInterval(() => {
            this.data = document.referrer;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class LocalStorageAvailable {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Local Storage Available";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = typeof Storage !== "undefined";
        this.intervalFn = setInterval(async () => {
            this.data = typeof Storage !== "undefined";
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class GetNetworkInformation {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Network Information";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async getNetworkInformation() {
        return new Promise((resolve) => {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            resolve(connection);
        });
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        const info = await this.getNetworkInformation();
        const obj = {};
        for (let key in info) {
            obj[key] = info[key];
        }
        this.data = obj;
        this.intervalFn = setInterval(async () => {
            this.data = obj;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class Clipboard {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Clipboard";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = navigator.clipboard;
        this.intervalFn = setInterval(async () => {
            this.data = navigator.clipboard;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class Connection {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Connection";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        const info = navigator.connection;
        const obj = {};
        for (let key in info) {
            obj[key] = info[key];
        }
        this.data = obj;
        this.intervalFn = setInterval(async () => {
            this.data = obj;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class BrowserInfo {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Browser Info";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        const getBroswerInfo = (function () {
            const ua = navigator.userAgent;
            let tem;
            let M = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return "IE " + (tem[1] || "");
            }
            if (M[1] === "Chrome") {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem != null)
                    return tem.slice(1).join(" ").replace("OPR", "Opera");
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
            if ((tem = ua.match(/version\/(\d+)/i)) != null)
                M.splice(1, 1, tem[1]);
            return M.join(" ");
        })();
        this.data = getBroswerInfo;
        this.intervalFn = setInterval(async () => {
            this.data = getBroswerInfo;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class Platform {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Platform";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = navigator.platform;
        this.intervalFn = setInterval(async () => {
            this.data = navigator.platform;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class DeviceMemory {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Device Memory";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = navigator.deviceMemory || "unknown";
        this.intervalFn = setInterval(async () => {
            this.data = navigator.deviceMemory || "unknown";
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class HardwareConcurrency {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Hardware Concurrency";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = navigator.hardwareConcurrency;
        this.intervalFn = setInterval(async () => {
            this.data = navigator.hardwareConcurrency;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class Plugins {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Plugins";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = Array.from(navigator.plugins).map((plugin) => plugin.name);
        this.intervalFn = setInterval(async () => {
            this.data = Array.from(navigator.plugins).map((plugin) => plugin.name);
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class Geolocation {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Geolocation";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    getGeolocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(`Geolocation: ${position.coords.latitude}, ${position.coords.longitude}`);
            }, (error) => {
                reject(`Geolocation Error: ${error.message}`);
            });
        });
    };
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        const info = await this.getGeolocation().catch((err) => `${err}`);
        this.data = info;
        this.intervalFn = setInterval(async () => {
            this.data = info;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class DoNotTrack {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Do Not Track";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
        this.intervalFn = setInterval(async () => {
            this.data = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class Battery {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Battery";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        const info = await navigator.getBattery();
        const obj = {};
        for (let key in info) {
            obj[key] = info[key];
        }
        this.data = obj;
        this.intervalFn = setInterval(async () => {
            this.data = obj;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class CurrentURL {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Current URL";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = window.location.href;
        this.intervalFn = setInterval(async () => {
            this.data = window.location.href;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class HistoryLength {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "History Length";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = window.history.length;
        this.intervalFn = setInterval(async () => {
            this.data = window.history.length;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class ColorDepth {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Color Depth";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
        console.log(`Started collecting data for ${this.name}`);
        this.data = screen.colorDepth;
        this.intervalFn = setInterval(async () => {
            this.data = screen.colorDepth;
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
export class TouchSupport {
    intervalCount;
    name;
    data;
    intervalFn;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
        this.name = "Touch Support";
        this.data = null;
        this.intervalFn = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.name;
    }
    async startCollect() {
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
        }, this.intervalCount);
    }
    finishCollect() {
        if (this.intervalFn) {
            clearInterval(this.intervalFn);
            this.intervalFn = null;
        }
        console.log(`Finished collecting data for: ${this.name}`);
    }
}
// --------------- END OF REGULAR COLLECTORS ----------------------------
//
//
//
//
//
//
// --------------- START OF CONTINUOUS COLLECTORS ----------------------------
// --------------- END OF CONTINUOUS COLLECTORS ----------------------------
