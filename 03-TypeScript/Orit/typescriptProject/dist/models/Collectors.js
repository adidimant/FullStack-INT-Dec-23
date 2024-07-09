import { EventsManager } from './eventsManager.js';
//const DEFAULT_INTERVAL = 1000; // Default interval in milliseconds
const config = EventsManager.getConfig();
// A class to monitor the user's screen width:
export class ScreenWidthCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            this.data = screen.width;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = screen.width;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's screen height:
export class ScreenHeightCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            this.data = screen.height;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = screen.height;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's language:
export class LanguageCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            const language = navigator.language || navigator.userLanguage || '';
            this.data = language ? language : null;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                const language = navigator.language || navigator.userLanguage || '';
                this.data = language ? language : null;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's userAgent:
export class UserAgentCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            this.data = navigator.userAgent;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = navigator.userAgent;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's timeZone:
export class TimeZoneCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's cookiesEnabled setting:
export class CookiesEnabledCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            this.data = navigator.cookieEnabled;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = navigator.cookieEnabled;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's javascript enabled setting:
export class JavascriptEnabledCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        const javaEnabled = /Java/.test(navigator.userAgent);
        this.data = javaEnabled ? 'Java enabled' : 'Java not enabled'; //navigator.javaEnabled is depreciated
        //this.data = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled(); //navigator.javaEnabled is depreciated
        EventsManager.addCollectorData(this);
        this.collectionInterval = window.setInterval(() => {
            const javaEnabled = /Java/.test(navigator.userAgent);
            this.data = javaEnabled ? 'Java enabled' : 'Java not enabled';
            EventsManager.addCollectorData(this);
        }, this.interval);
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's online status:
export class OnlineStatusCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        try {
            this.data = navigator.onLine;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = navigator.onLine;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
        catch (error) {
            console.error(`Error in ${this.constructor.name}.startCollect interval callback: ${error.message}`);
            this.data = null;
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's referrer:
export class ReferrerCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        try {
            this.data = document.referrer;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = document.referrer;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
        catch (error) {
            console.error(`Error in ${this.constructor.name}.startCollect interval callback: ${error.message}`);
            this.data = null;
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's localStorage enabled setting:
export class LocalStorageEnabledCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        try {
            this.data = typeof (Storage) !== 'undefined';
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = typeof (Storage) !== 'undefined';
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
        catch (error) {
            console.error(`Error in ${this.constructor.name}.startCollect interval callback: ${error.message}`);
            this.data = null;
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's network information:
export class NetworkInformationCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        function getNetworkInformation() {
            return new Promise((resolve, reject) => {
                const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (connection) {
                    resolve(connection); // Resolves with NetworkInformation object
                }
                else {
                    reject(new Error('Network information not available.'));
                }
            });
        }
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // First collect data immediately
        getNetworkInformation()
            .then(connection => {
            this.data = connection;
            console.log('Initial collected data:', this.data);
            EventsManager.addCollectorData2(this.getKey(), this.data);
        })
            .catch(error => {
            console.error(`Error in ${this.constructor.name}.startCollect initial collection:`, error.message);
            this.data = null; // Handle error by setting data to null or other appropriate action
        });
        // Set interval for subsequent collections
        this.collectionInterval = window.setInterval(() => {
            getNetworkInformation()
                .then(connection => {
                this.data = connection;
                console.log('Updated collected data:', this.data);
                EventsManager.addCollectorData2(this.getKey(), this.data); // No Idea why console.log print correct data, but eventmanager saves empty object.
            })
                .catch(error => {
                console.error(`Error in ${this.constructor.name}.startCollect interval callback:`, error.message);
                this.data = null; // Handle error by setting data to null or other appropriate action
            });
        }, this.interval);
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's clipboard data:
export class ClipboardCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            try {
                this.data = navigator.clipboard;
                EventsManager.addCollectorData(this);
                this.collectionInterval = window.setInterval(() => {
                    this.data = navigator.clipboard;
                    EventsManager.addCollectorData(this);
                }, this.interval);
            }
            catch (error) {
                console.error(`Error in ${this.constructor.name}.startCollect interval callback: ${error.message}`);
                this.data = null;
            }
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's connection information: by const connection = navigator.connection, 
// already done at the NetworkInformationCollector.
// A class to monitor the user's browser info:
export class BrowserInfoCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        const browserInfo = (function () {
            const ua = navigator.userAgent;
            let tem;
            let M = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem != null)
                    return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) != null)
                M.splice(1, 1, tem[1]);
            return M.join(' ');
        })();
        try {
            this.data = browserInfo;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = browserInfo;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
        catch (error) {
            console.error(`Error in ${this.constructor.name}.startCollect interval callback: ${error.message}`);
            this.data = null;
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the number of logical processor cores available on the user's device:
export class HardwareConcurrencyCollector {
    //constructor(key: string, SDK_ENABLED: boolean, interval: number) {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        this.data = navigator.hardwareConcurrency;
        EventsManager.addCollectorData(this);
        this.collectionInterval = window.setInterval(() => {
            this.data = navigator.hardwareConcurrency;
            EventsManager.addCollectorData(this);
        }, this.interval);
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
    getKey() {
        return this.key;
    }
}
// A class to monitor the users device platform:
export class PlatformCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.key;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        if (navigator.platform != undefined) {
            this.data = navigator.platform; //this is depreciated!
        }
        else {
            this.data = 'Undefined. navigator.platform is depreciated.';
        }
        EventsManager.addCollectorData(this);
        this.collectionInterval = window.setInterval(() => {
            if (navigator.platform != undefined) {
                this.data = navigator.platform; //this is depreciated!
            }
            else {
                this.data = 'Undefined. navigator.platform is depreciated.';
            }
            EventsManager.addCollectorData(this);
        }, this.interval);
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the users device memory:
export class DeviceMemoryCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.key;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        this.data = navigator.deviceMemory || 'unknown'; // Sometimes does not exist
        EventsManager.addCollectorData(this);
        this.collectionInterval = window.setInterval(() => {
            this.data = navigator.deviceMemory || 'unknown'; // Sometimes does not exist
            EventsManager.addCollectorData(this);
        }, this.interval);
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's plugins:
export class PluginsCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        try {
            this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
        catch (error) {
            console.error(`Error in ${this.constructor.name}.startCollect interval callback: ${error.message}`);
            this.data = null;
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's geolocation position:
/*Doesn't work for some reason...*/
export class GeolocationCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    getGeolocationData() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject('Geolocation is not supported by this browser.');
                return;
            }
            navigator.geolocation.getCurrentPosition((position) => {
                resolve('Geolocation: ' + position.coords.latitude + ', ' + position.coords.longitude);
            }, (error) => {
                reject('Geolocation Error: ' + error.message);
            });
        });
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        const collectData = () => {
            this.getGeolocationData()
                .then(data => {
                this.data = data;
                EventsManager.addCollectorData(this);
            })
                .catch(error => {
                if (error.code === 1) { // User denied Geolocation
                    //console.warn(`Geolocation access denied: ${error.message}`);
                    this.data = 'User denied GeoLocation.';
                    EventsManager.addCollectorData(this);
                }
                else {
                    //console.error(`Error in ${this.constructor.name}.startCollect data collection: ${error.message || error}`);
                    this.data = 'User denied GeoLocation.';
                    EventsManager.addCollectorData(this);
                }
            });
        };
        // First collect data
        collectData();
        // Then setInterval for subsequent collections
        this.collectionInterval = window.setInterval(() => {
            collectData();
        }, this.interval);
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's do not track info
export class DoNotTrackInfoCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    getDoNotTrackStatus() {
        if (navigator.doNotTrack !== undefined) {
            return navigator.doNotTrack;
        }
        else if (window.doNotTrack !== undefined) {
            return window.doNotTrack;
        }
        else if (navigator.msDoNotTrack !== undefined) {
            return navigator.msDoNotTrack;
        }
        return null; // Do Not Track status not available
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        try {
            const doNotTrack = this.getDoNotTrackStatus();
            if (doNotTrack !== null) {
                this.data = 'Do Not Track status:' + doNotTrack;
            }
            else {
                this.data = 'Do Not Track status not available.';
            }
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                const doNotTrack = this.getDoNotTrackStatus();
                if (doNotTrack !== null) {
                    this.data = 'Do Not Track status:' + doNotTrack;
                }
                else {
                    this.data = 'Do Not Track status not available.';
                }
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
        catch (error) {
            console.error(`Error in ${this.constructor.name}.startCollect interval callback: ${error.message}`);
            this.data = null;
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's battery info: 
// THERE IS A PROBLEM WITH GETTING navigator.getBattery()
// IT'S DEPRECIATED AND IS STRONGLY RECOMMENDED NOT TO USE.
/*export class BatteryCollector implements Collector<string> {
    public interval: number;
    public key: string;
    private data: string | null;
    public SDK_ENABLED: boolean;
    private collectionInterval: number | null; // needed as an ID for the interval

    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }

    getKey(): string {
        return this.key;
    }

    getData(): string | null {
        return this.data;
    }

    async getBatteryData(): Promise<string> {
        try {
            if ('getBattery' in navigator) {
                const battery: BatteryInformation = await (navigator.getBattery() as Promise<BatteryInformation>);
                return 'Battery Level: ' + battery.level * 100 + '% ' + 'Battery Charging: ' + battery.charging;
            } else {
                throw new Error('Battery API not supported');
            }
        } catch (error) {
            console.error('Battery Error:', error.message);
            return 'Battery data unavailable'; // Return a default value or handle the error as needed
        }
    }

    startCollect(): void {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        const collectData: () => void = () => {
            this.getBatteryData()
                .then(data => {
                    this.data = data;
                    console.log('Collected data: ' + this.data);
                    EventsManager.addCollectorData(this);
                })
                .catch(error => {
                    console.error(`Error in ${this.constructor.name}.startCollect data collection: ${error.message}`);
                    this.data = null;
                });
        };
        // first collect data
        collectData();

        // then setInterval for subsequent collections
        this.collectionInterval = window.setInterval(() => {
            collectData();
        }, this.interval);
    }

    finishCollect(): void {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}*/
// A class to monitor the user's current url:
export class CurrentURLCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        try {
            this.data = window.location.href;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = window.location.href;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
        catch (error) {
            console.error(`Error in ${this.constructor.name}.startCollect interval callback: ${error.message}`);
            this.data = null;
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's history length:
export class HistoryLengthCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        try {
            this.data = window.history.length;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = window.history.length;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
        catch (error) {
            console.error(`Error in ${this.constructor.name}.startCollect interval callback: ${error.message}`);
            this.data = null;
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's colorDepth:
export class ColorDepthCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        try {
            this.data = screen.colorDepth;
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = screen.colorDepth;
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
        catch (error) {
            console.error(`Error in ${this.constructor.name}.startCollect interval callback: ${error.message}`);
            this.data = null;
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
// A class to monitor the user's touchSupport (for browsers running in mobile/tablets):
export class TouchSupportCollector {
    constructor() {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collection interval id to null when the class is first assigned.
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        var _a;
        if (!this.SDK_ENABLED) {
            console.error('SDK is disabled. Data collection will not start.');
            return;
        }
        // setInterval for collecting
        try {
            const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || ((_a = navigator.msMaxTouchPoints) !== null && _a !== void 0 ? _a : 0) > 0;
            this.data = touchSupport ? 'Touch supported.' : 'Touch not supported.';
            EventsManager.addCollectorData(this);
            this.collectionInterval = window.setInterval(() => {
                this.data = touchSupport ? 'Touch supported.' : 'Touch not supported.';
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
        catch (error) {
            console.error(`Error in ${this.constructor.name}.startCollect interval callback: ${error.message}`);
            this.data = null;
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
