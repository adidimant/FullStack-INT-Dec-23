//רוחב
export class ScreenWidthcollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "ScreenWidth";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(screen.width);
            console.log("screenWidth:", screen.width);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//אורך
export class ScreenHeightcollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "screenHeight";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(screen.height);
            console.log("screenHeight:", screen.height);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//שפה
export class Languagecollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return "language";
    }
    setData(data) {
        this.data = data;
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            const language = navigator.language || navigator || null;
            this.setData(language);
            console.log("language:", language);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//פרטים על הדפדפן
export class UserAgentcollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "userAgent";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.userAgent);
            console.log("userAgent:", navigator.userAgent);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//איזור זמן מוגדר של המשתמש
export class TimeZoneCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "timeZone";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(Intl.DateTimeFormat().resolvedOptions().timeZone);
            console.log("timeZone:", Intl.DateTimeFormat().resolvedOptions().timeZone);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//האם עוגיות מופעלות בדפדפן
export class TcookiesEnabledCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "tcookiesEnabled";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.cookieEnabled);
            console.log("tcookiesEnabled:", navigator.cookieEnabled);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//האם java מופעל
export class JavaScriptEnabledCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "javaScriptEnabled";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(typeof navigator.javaEnabled === 'function' && navigator.javaEnabled());
            console.log("javaScriptEnabled:", typeof navigator.javaEnabled === 'function' && navigator.javaEnabled());
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//האם הדפדפן מקוון
export class OnlineStatusCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "onlineStatus";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.onLine);
            console.log("onlineStatus:", navigator.onLine);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//עמוד המפנה (לדוג גוגל)
export class ReferrerCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "referrer";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(document.referrer);
            console.log("referrer:", document.referrer);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//מבטיח שהAPI strong פעיל בדפדפן כדי להשתמש באיחסון המקומי
export class LocalStorageAvailableCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "localStorageAvailable";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(typeof (Storage) !== 'undefined');
            console.log("localStorageAvailable:", typeof (Storage) !== 'undefined');
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//מספק מידע על החיבור של המערכת (כל אחד מהם הוא של גירסאות ישנות..)
export class NetworkInformationCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "networkInformation";
    }
    getIntervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            this.setData(connection);
            console.log("networkInformation:", this.data);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval !== null) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class GetclipboardCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "getclipboard";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.clipboard);
            console.log("getclipboard:", navigator.clipboard);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class GetConnectionCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "getconnection";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            const connection = navigator.connection;
            this.setData(connection);
            console.log("getconnection:", navigator.connection);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class BrowserInfocollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.browserInfo = () => {
            const ua = navigator.userAgent;
            let tem;
            const M = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return { name: 'IE', version: tem[1] || '' };
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem != null)
                    return { name: tem[1].replace('OPR', 'Opera'), version: tem[2] };
            }
            const name = M[1] ? M[1] : navigator.appName;
            const version = M[2] ? M[2] : navigator.appVersion.split(' ')[0];
            return { name, version };
        };
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "screenWidth";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            const browserInfo = this.browserInfo();
            this.setData(browserInfo);
            console.log("BrowserInfo:", browserInfo);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class Platformcollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "platform";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.platform);
            console.log("platform:", navigator.platform);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class DeviceMemorycollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "deviceMemory";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            const deviceMemory = navigator.deviceMemory || 'unknown';
            this.setData(deviceMemory);
            console.log("deviceMemory:", deviceMemory);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class HardwareConcurrencyCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "hardwareConcurrency";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.hardwareConcurrency);
            console.log("hardwareConcurrency:", navigator.hardwareConcurrency);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class GeolocationPositionCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "GeolocationPosition";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log('Geolocation:', position.coords.latitude, position.coords.longitude);
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                this.setData({ latitude: lat, longitude: lon });
            }, (error) => {
                console.log('Geolocation Error:', error.message);
            });
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class DoNotTrackCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "doNotTrack";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            const doNotTrack = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
            this.setData(doNotTrack);
            console.log("doNotTrack:", doNotTrack);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class GetBatteryInfoCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "getBatteryInfo";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        if (!navigator.getBattery) {
            console.error("getBattery is undefined");
            return;
        }
        this.collectInterval = setInterval(() => {
            if (!navigator.getBattery) {
                console.error('getBattery is not supported');
            }
            else {
                navigator.getBattery().then((battery) => {
                    var _a;
                    const level1 = battery.level !== undefined ? battery.level * 100 : -1;
                    const charging1 = (_a = battery.charging) !== null && _a !== void 0 ? _a : false;
                    console.log("getBatteryInfo:", level1, charging1);
                    this.setData({
                        level: level1,
                        charging: charging1
                    });
                }).catch(error => {
                    console.error("Error getting battery:", error);
                });
            }
            ;
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//כתובת האתר הנוכחית
export class CurrentUrlCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "currentUrl";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(window.location.href);
            console.log("currentUrl:", window.location.href);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//אורך הסטוריית חלון
export class HistoryLengthCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "historyLength";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(window.history.length);
            console.log("historyLength:", window.history.length);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//עומק המסך בצבע בסיביות
export class ColorDepthCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "colorDepth";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(screen.colorDepth);
            console.log("colorDepth:", screen.colorDepth);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
//תמיכה במגע בדפדפן
export class TouchSupportCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "touchSupport";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            const touchSupport = 'ontouchstart' in window ||
                (navigator.maxTouchPoints !== undefined && navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints !== undefined && navigator.msMaxTouchPoints > 0);
            this.setData(touchSupport);
            console.log("touchSupport:", touchSupport);
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class PluginsCollector {
    constructor(intervalTime) {
        this.data = null;
        this.collectInterval = null;
        this.intervalTime = intervalTime;
    }
    getData() {
        return this.data;
    }
    ;
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "plugins";
    }
    getintervalTime() {
        return this.intervalTime;
    }
    startCollect() {
        this.collectInterval = setInterval(() => {
            this.setData(Array.from(navigator.plugins).map(plugin => plugin.name));
            console.log("plugins:", Array.from(navigator.plugins).map(plugin => plugin.name));
        }, this.intervalTime);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
