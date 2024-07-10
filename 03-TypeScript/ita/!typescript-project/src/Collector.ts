import { Collector, BatteryData, Geolocation, NetworkInformation } from "./interface.js"

//רוחב
export class ScreenWidthcollector implements Collector<number> {
    private data: number | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :number | null{
        return this.data;
    };

    setData(data: number | null) {
        this.data = data;
    }

    getKey() : string {
        return "ScreenWidth";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(screen.width);
            console.log("screenWidth:", screen.width);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

    }

    
//אורך
export class ScreenHeightcollector implements Collector<number> {
    private data: number | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :number | null{
        return this.data;
    };

    setData(data: number | null) {
        this.data = data;
    }

    getKey() : string {
        return "screenHeight";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(screen.height);
            console.log("screenHeight:", screen.height);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }
}

//שפה
export class Languagecollector implements Collector<string> {
    private data: string | null = null;
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :string | string[] | null{
        return this.data;
    };

    getKey() : string {
        return "language";
    }

    setData(data: string |  null) {
        this.data = data;
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            const language = navigator.language || (navigator as any)|| null;
            this.setData(language);
            console.log("language:", language);
            }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }
}
//פרטים על הדפדפן
export class UserAgentcollector implements Collector<string> {
    private data: string | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :string | null{
        return this.data;
    };

    setData(data: string | null) {
        this.data = data;
    }

    getKey() : string {
        return "userAgent";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.userAgent);
            console.log("userAgent:", navigator.userAgent);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }
}
//איזור זמן מוגדר של המשתמש
export class TimeZoneCollector implements Collector<string> {
    private data: string | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :string | null{
        return this.data;
    };

    setData(data: string | null) {
        this.data = data;
    }

    getKey() : string {
        return "timeZone";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(Intl.DateTimeFormat().resolvedOptions().timeZone);
            console.log("timeZone:", Intl.DateTimeFormat().resolvedOptions().timeZone);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }
}
//האם עוגיות מופעלות בדפדפן
export class TcookiesEnabledCollector implements Collector<boolean> {
    private data: boolean | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :boolean | null{
        return this.data;
    };

    setData(data: boolean | null) {
        this.data = data;
    }

    getKey() : string {
        return "tcookiesEnabled";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.cookieEnabled);
            console.log("tcookiesEnabled:", navigator.cookieEnabled);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }
}
//האם java מופעל
export class JavaScriptEnabledCollector implements Collector<boolean> {
    private data: boolean | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :boolean | null{
        return this.data;
    };

    setData(data: boolean | null) {
        this.data = data;
    }

    getKey() : string {
        return "javaScriptEnabled";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(typeof navigator.javaEnabled === 'function' && navigator.javaEnabled());
            console.log("javaScriptEnabled:", typeof navigator.javaEnabled === 'function' && navigator.javaEnabled());
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }
}
//האם הדפדפן מקוון
export class OnlineStatusCollector implements Collector<boolean> {
    private data: boolean | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :boolean | null{
        return this.data;
    };

    setData(data: boolean | null) {
        this.data = data;
    }

    getKey() : string {
        return "onlineStatus";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.onLine);
            console.log("onlineStatus:", navigator.onLine);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }
}
//עמוד המפנה (לדוג גוגל)
export class ReferrerCollector implements Collector<string> {
    private data: string | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :string | null{
        return this.data;
    };

    setData(data: string | null) {
        this.data = data;
    }

    getKey() : string {
        return "referrer";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(document.referrer);
            console.log("referrer:", document.referrer);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }
}
//מבטיח שהAPI strong פעיל בדפדפן כדי להשתמש באיחסון המקומי
export class LocalStorageAvailableCollector implements Collector<boolean> {
    private data: boolean | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :boolean | null{
        return this.data;
    };

    setData(data: boolean | null) {
        this.data = data;
    }

    getKey() : string {
        return "localStorageAvailable";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(typeof(Storage) !== 'undefined');
            console.log("localStorageAvailable:", typeof(Storage) !== 'undefined');
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }
}

//מספק מידע על החיבור של המערכת (כל אחד מהם הוא של גירסאות ישנות..)
export class NetworkInformationCollector implements Collector<NetworkInformation | undefined> { 
    private data: NetworkInformation | undefined | null = null;
    intervalTime: number;
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData(): NetworkInformation | undefined | null {
        return this.data;
    }

    setData(data: NetworkInformation | undefined | null) {
        this.data = data;
    }

    getKey(): string {
        return "networkInformation";
    }

    getIntervalTime(): number {
        return this.intervalTime;
    }

    startCollect(): void {
        this.collectInterval = setInterval(() => {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            this.setData(connection)
            console.log("networkInformation:", this.data);
        }, this.intervalTime);
    }

    finishCollect(): void {
        if (this.collectInterval !== null) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}

export class GetclipboardCollector implements Collector<Clipboard> {
    private data: Clipboard | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :Clipboard | null{
        return this.data;
    };

    setData(data: Clipboard | null) {
        this.data = data;
    }

    getKey() : string {
        return "getclipboard";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.clipboard);
            console.log("getclipboard:", navigator.clipboard);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }
}

export class GetConnectionCollector implements Collector<NetworkInformation | undefined> {
    private data: NetworkInformation | undefined | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :NetworkInformation | undefined | null{
        return this.data;
    };

    setData(data: NetworkInformation | undefined | null) {
        this.data = data;
    }

    getKey() : string {
        return "getconnection";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            const connection = navigator.connection;
            this.setData(connection)
            console.log("getconnection:", navigator.connection);  
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }
}

export class BrowserInfocollector implements Collector<object> { 
    private data: object | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :object | null{
        return this.data;
    };

    setData(data: object | null) {
        this.data = data;
    }

    getKey() : string {
        return "screenWidth";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }

    private browserInfo = () => {
        const ua = navigator.userAgent;
        let tem: any;
        const M = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i) || [];

        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return { name: 'IE', version: tem[1] || '' };
        }

        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) return { name: tem[1].replace('OPR', 'Opera'), version: tem[2] };
        }

        const name = M[1] ? M[1] : navigator.appName;
        const version = M[2] ? M[2] : navigator.appVersion.split(' ')[0];
        return { name, version };
        };
    
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            const browserInfo = this.browserInfo();
            this.setData(browserInfo);
            console.log("BrowserInfo:", browserInfo);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

    }

export class Platformcollector implements Collector<string> {
    private data: string | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :string | null{
        return this.data;
    };

    setData(data: string | null) {
        this.data = data;
    }

    getKey() : string {
        return "platform";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.platform);
            console.log("platform:", navigator.platform);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

    }

export class DeviceMemorycollector implements Collector<number | 'unknown'> {
    private data: number | 'unknown' | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :number | 'unknown' | null{
        return this.data;
    };

    setData(data: number | 'unknown' | null) {
        this.data = data;
    }

    getKey() : string {
        return "deviceMemory";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            const deviceMemory= navigator.deviceMemory || 'unknown';
            this.setData(deviceMemory);
            console.log("deviceMemory:", deviceMemory);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

    }

export class HardwareConcurrencyCollector implements Collector<number> {
    private data: number | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :number | null{
        return this.data;
    };

    setData(data: number | null) {
        this.data = data;
    }

    getKey() : string {
        return "hardwareConcurrency";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(navigator.hardwareConcurrency);
            console.log("hardwareConcurrency:", navigator.hardwareConcurrency);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}


export class GeolocationPositionCollector implements Collector<Geolocation> {
    private data: Geolocation | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :Geolocation | null{
        return this.data;
    };

    setData(data: Geolocation | null) {
        this.data = data;
    }

    getKey() : string {
        return "GeolocationPosition";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log('Geolocation:', position.coords.latitude, position.coords.longitude);
                const lat =  position.coords.latitude;
                const lon = position.coords.longitude;
                this.setData({ latitude: lat, longitude: lon })
              }, (error) => {
                console.log('Geolocation Error:', error.message);
              }) 
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}

export class DoNotTrackCollector implements Collector<string | undefined> {
    private data: string | undefined | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :string | undefined | null{
        return this.data;
    };

    setData(data: string | undefined | null): void {
        this.data = data;
    }

    getKey() : string {
        return "doNotTrack";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            const doNotTrack= navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
            this.setData(doNotTrack);
            console.log("doNotTrack:", doNotTrack);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}




export class GetBatteryInfoCollector implements Collector<BatteryData> {
    private data: BatteryData | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;
    

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :BatteryData | null{
        return this.data;
    };

    setData(data: BatteryData | null) {
        this.data = data;
    }

    getKey() : string {
        return "getBatteryInfo";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        if (!navigator.getBattery) {
            console.error("getBattery is undefined");
            return;
        }
        this.collectInterval = setInterval(() => {
            if (!navigator.getBattery) {
                console.error('getBattery is not supported') 
            } else {
                navigator.getBattery().then((battery: BatteryData) => {
                const level1 = battery.level !== undefined ? battery.level * 100 : -1; 
                const charging1 = battery.charging ?? false;
                console.log("getBatteryInfo:", level1, charging1);
    
                this.setData({
                    level: level1,
                    charging: charging1
                });
                }).catch(error => {
                    console.error("Error getting battery:", error);
                })};
        }, this.intervalTime) 
    }
    
    
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}

//כתובת האתר הנוכחית
export class CurrentUrlCollector implements Collector<string> {
    private data: string | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :string | null{
        return this.data;
    };

    setData(data: string | null) {
        this.data = data;
    }

    getKey() : string {
        return "currentUrl";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(window.location.href);
            console.log("currentUrl:", window.location.href);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}

//אורך הסטוריית חלון
export class HistoryLengthCollector implements Collector<number> {
    private data: number | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :number | null{
        return this.data;
    };

    setData(data: number | null) {
        this.data = data;
    }

    getKey() : string {
        return "historyLength";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(window.history.length);
            console.log("historyLength:", window.history.length);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}

//עומק המסך בצבע בסיביות
export class ColorDepthCollector implements Collector<number> {
    private data: number | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :number | null{
        return this.data;
    };

    setData(data: number | null) {
        this.data = data;
    }

    getKey() : string {
        return "colorDepth";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(screen.colorDepth);
            console.log("colorDepth:", screen.colorDepth);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}

//תמיכה במגע בדפדפן
export class TouchSupportCollector implements Collector<boolean> {
    private data: boolean | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :boolean | null{
        return this.data;
    };

    setData(data: boolean | null) {
        this.data = data;
    }

    getKey() : string {
        return "touchSupport";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            const touchSupport = 'ontouchstart' in window || 
            (navigator.maxTouchPoints !== undefined && navigator.maxTouchPoints > 0) || 
            (navigator.msMaxTouchPoints !== undefined && navigator.msMaxTouchPoints > 0);
            this.setData(touchSupport);
            console.log("touchSupport:", touchSupport);
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}

export class PluginsCollector implements Collector<string[]> {
    private data: string[] | null = null; 
    intervalTime: number; 
    private collectInterval: ReturnType<typeof setTimeout> | null = null;

    constructor(intervalTime: number) {
        this.intervalTime = intervalTime;
    }

    getData() :string[] | null{
        return this.data;
    };

    setData(data: string[] | null) {
        this.data = data;
    }

    getKey() : string {
        return "plugins";
    }

    getintervalTime(): number {
        return this.intervalTime;
    }
    
    startCollect():void {
        this.collectInterval = setInterval(() => {
            this.setData(Array.from(navigator.plugins).map(plugin => plugin.name));
            console.log("plugins:", Array.from(navigator.plugins).map(plugin => plugin.name));
        }, this.intervalTime) 
        }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}











    







































