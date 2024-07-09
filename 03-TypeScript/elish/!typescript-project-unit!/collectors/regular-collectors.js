"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchSupportCollector = exports.ColorDepthCollector = exports.HistoryLengthCollector = exports.CurrentUrlCollector = exports.DoNotTrackCollector = exports.PluginsCollector = exports.HardwareConcurrencyCollector = exports.DeviceMemoryCollector = exports.PlatformCollector = exports.BrowserInfoCollector = exports.ClipboardCollector = exports.NetworkInformationCollector = exports.LocalStorageAvailableCollector = exports.ReferrerCollector = exports.OnlineStatusCollector = exports.JavaScriptEnabledCollector = exports.CookiesEnabledCollector = exports.TimeZoneCollector = exports.UserAgentCollector = exports.LanguageCollector = exports.ScreenHeightCollector = exports.ScreenWidthCollector = void 0;
class ScreenWidthCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'screenWidth';
    }
    ;
    startCollect() {
        try {
            this.data = screen.width;
            setInterval(() => {
                try {
                    this.data = screen.width;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.ScreenWidthCollector = ScreenWidthCollector;
;
class ScreenHeightCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'screenHeight';
    }
    ;
    startCollect() {
        try {
            this.data = screen.height;
            setInterval(() => {
                try {
                    this.data = screen.height;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.log('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.ScreenHeightCollector = ScreenHeightCollector;
;
class LanguageCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'language';
    }
    ;
    startCollect() {
        try {
            this.data = navigator.language || navigator.userLanguage;
            setInterval(() => {
                try {
                    this.data = navigator.language || navigator.userLanguage;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.log('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.LanguageCollector = LanguageCollector;
;
class UserAgentCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'userAgent';
    }
    ;
    startCollect() {
        try {
            this.data = navigator.userAgent;
            setInterval(() => {
                try {
                    this.data = navigator.userAgent;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.log('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.UserAgentCollector = UserAgentCollector;
;
class TimeZoneCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'timeZone';
    }
    ;
    startCollect() {
        try {
            this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
            setInterval(() => {
                try {
                    this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.log('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.TimeZoneCollector = TimeZoneCollector;
;
class CookiesEnabledCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'cookiesEnabled ';
    }
    ;
    startCollect() {
        try {
            this.data = navigator.cookieEnabled;
            setInterval(() => {
                try {
                    this.data = navigator.cookieEnabled;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.log('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.CookiesEnabledCollector = CookiesEnabledCollector;
class JavaScriptEnabledCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'javaScriptEnabled  ';
    }
    ;
    startCollect() {
        try {
            this.data = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
            setInterval(() => {
                try {
                    this.data = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.log('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.JavaScriptEnabledCollector = JavaScriptEnabledCollector;
class OnlineStatusCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'onlineStatus';
    }
    ;
    startCollect() {
        try {
            this.data = navigator.onLine;
            setInterval(() => {
                try {
                    this.data = navigator.onLine;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.log('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.OnlineStatusCollector = OnlineStatusCollector;
class ReferrerCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'referrer';
    }
    ;
    startCollect() {
        try {
            this.data = document.referrer;
            setInterval(() => {
                try {
                    this.data = document.referrer;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.log('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.ReferrerCollector = ReferrerCollector;
;
class LocalStorageAvailableCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'localStorageAvailable';
    }
    ;
    startCollect() {
        try {
            this.data = typeof (Storage) !== 'undefined';
            setInterval(() => {
                try {
                    this.data = typeof (Storage) !== 'undefined';
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.log('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.LocalStorageAvailableCollector = LocalStorageAvailableCollector;
;
// export class NetworkInformationCollector implements Collector<Promise<any | null>> {
//     interval: number;
//     intervalId: number | null = null
//     private data: any | null  = null;
//     constructor(interval: number){
//         this.interval = interval;
//     };
//     getData(): Promise< any | null> {
//         return Promise.resolve(this.data);
//     };
//     getKey(): string {
//         return 'NetworkInformation';
//     };
//     startCollect(): void {
//         this.updateData();
//         this.intervalId = setInterval(()=>{
//             this.updateData();
//         }, this.interval);
//     };
//     finishCollect(): void {
//         if(this.intervalId){
//             clearInterval(this.intervalId);
//             this.intervalId = null;
//         }
//         this.data = null;
//     };
//     private updateData(){
//         const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
//         this.data = connection || null;
//     };
// };
class NetworkInformationCollector {
    constructor(interval) {
        this.intervalId = null;
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return Promise.resolve(this.data);
    }
    getKey() {
        return 'networkInformation';
    }
    startCollect() {
        try {
            this.updateData();
            this.intervalId = setInterval(() => {
                try {
                    this.updateData();
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.log('Failed to start browser info collection:', error);
        }
    }
    finishCollect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
    updateData() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        this.data = connection || null;
    }
}
exports.NetworkInformationCollector = NetworkInformationCollector;
class ClipboardCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'clipboard';
    }
    ;
    startCollect() {
        try {
            this.data = navigator.clipboard;
            setInterval(() => {
                try {
                    this.data = navigator.clipboard;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.ClipboardCollector = ClipboardCollector;
;
class BrowserInfoCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    getKey() {
        return 'BrowserInfo';
    }
    ;
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start browser info collection:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
    collectData() {
        try {
            const ua = navigator.userAgent;
            let tem;
            let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                this.data = 'IE ' + (tem[1] || '');
            }
            else if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem != null)
                    this.data = tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            else {
                M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
                if ((tem = ua.match(/version\/(\d+)/i)) != null)
                    M.splice(1, 1, tem[1]);
                this.data = M.join(' ');
            }
        }
        catch (error) {
            console.error('Error getting browser info:', error);
            this.data = null;
        }
    }
    ;
}
exports.BrowserInfoCollector = BrowserInfoCollector;
;
class PlatformCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'platform ';
    }
    ;
    startCollect() {
        try {
            this.data = navigator.platform;
            setInterval(() => {
                try {
                    this.data = navigator.platform;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Error getting browser info:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.PlatformCollector = PlatformCollector;
;
class DeviceMemoryCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    getKey() {
        return 'deviceMemory';
    }
    ;
    startCollect() {
        try {
            this.data = navigator.deviceMemory || 'unknown';
            setInterval(() => {
                try {
                    this.data = navigator.deviceMemory || 'unknown';
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Error getting browser info:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.DeviceMemoryCollector = DeviceMemoryCollector;
;
class HardwareConcurrencyCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'HardwareConcurrency';
    }
    startCollect() {
        try {
            this.data = navigator.hardwareConcurrency;
            setInterval(() => {
                try {
                    this.data = navigator.hardwareConcurrency;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Error getting browser info:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.HardwareConcurrencyCollector = HardwareConcurrencyCollector;
;
class PluginsCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'plugins';
    }
    startCollect() {
        try {
            this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
            setInterval(() => {
                try {
                    this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Error getting browser info:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.PluginsCollector = PluginsCollector;
;
class DoNotTrackCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'doNotTrack';
    }
    startCollect() {
        try {
            this.data = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
            setInterval(() => {
                try {
                    this.data = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Error getting browser info:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.DoNotTrackCollector = DoNotTrackCollector;
;
class CurrentUrlCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'currentUrl ';
    }
    startCollect() {
        try {
            this.data = window.location.href;
            setInterval(() => {
                try {
                    this.data = window.location.href;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Error getting browser info:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.CurrentUrlCollector = CurrentUrlCollector;
;
class HistoryLengthCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'historyLength';
    }
    startCollect() {
        try {
            this.data = window.history.length;
            setInterval(() => {
                try {
                    this.data = window.history.length;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Error getting browser info:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.HistoryLengthCollector = HistoryLengthCollector;
;
class ColorDepthCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'colorDepth';
    }
    startCollect() {
        try {
            this.data = screen.colorDepth;
            setInterval(() => {
                try {
                    this.data = screen.colorDepth;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Error getting browser info:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.ColorDepthCollector = ColorDepthCollector;
;
class TouchSupportCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'touchSupport';
    }
    startCollect() {
        try {
            this.data = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
            setInterval(() => {
                try {
                    this.data = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
                }
                catch (error) {
                    console.error('Error collecting browser info:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Error getting browser info:', error);
        }
    }
    ;
    finishCollect() {
        this.data = null;
    }
    ;
}
exports.TouchSupportCollector = TouchSupportCollector;
;
