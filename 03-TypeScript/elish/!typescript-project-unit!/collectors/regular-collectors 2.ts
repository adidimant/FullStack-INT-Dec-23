import {Collector} from './interfaceCollectors'

export class ScreenWidthCollector implements Collector<number> {
    interval: number;
    private data: number | null = null;

    constructor(interval: number){
        this.interval = interval;
    }
    
    getData(): number | null{
        return this.data;
    };

    getKey(): string{
        return 'screenWidth';
    };

    startCollect(){
        try{
            this.data = screen.width;
            setInterval(()=>{
                try{
                    this.data = screen.width;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.error('Failed to start browser info collection:',error);
        }
    };

    finishCollect(){
        this.data = null;
    };
};

export class ScreenHeightCollector implements Collector<number> {
    interval: number;
    private data: number | null = null;

    
    constructor(interval: number){
        this.interval = interval;
    };

    getData(): number | null{
        return this.data;
    };

    getKey(): string{
        return 'screenHeight';
    }; 
    
    startCollect(){
        try{
            this.data = screen.height;
            setInterval(()=>{
                try{
                    this.data = screen.height;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.log('Failed to start browser info collection:',error);
        }
    };

    finishCollect(){
        this.data = null;
    };
};

export class LanguageCollector implements Collector<string> {
    interval: number;
    private data: string | null = null;

    constructor(interval: number){
        this.interval = interval;
    }

    getData(): string | null{
        return this.data;
    };

    getKey(): string{
        return 'language';
    };

    startCollect(){
        try{
            this.data = navigator.language || (navigator as any).userLanguage;
            setInterval(()=>{
                try{
                    this.data = navigator.language || (navigator as any).userLanguage;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            },this.interval);
        } catch (error){
            console.log('Failed to start browser info collection:',error);
        }
    };

    finishCollect(){
        this.data = null;
    };
};

export class UserAgentCollector implements Collector<string> {
    interval: number;
    private data: string | null = null;

    constructor(interval: number){
        this.interval =  interval;
    };

    getData():string | null{
        return this.data;
    };

    getKey(): string{
        return 'userAgent';
    };
    
    startCollect(){
        try{
            this.data = navigator.userAgent;
            setInterval(()=>{
                try{
                    this.data = navigator.userAgent;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.log('Failed to start browser info collection:',error);
        }
    };

    finishCollect(): void {
        this.data = null;
    };
};

export class TimeZoneCollector implements Collector<string> {
    interval: number;
    private data: string | null = null;

    constructor(interval: number){
        this.interval =  interval;
    };

    getData(): string | null {
        return this.data;
    };

    getKey(): string {
        return 'timeZone';
    };

    startCollect(): void {
        try{
            this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
            setInterval(()=>{
                try{
                    this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.log('Failed to start browser info collection:',error);
        }
    };

    finishCollect(): void {
        this.data = null;
    };
};

export class CookiesEnabledCollector implements Collector<boolean> {
    interval: number;
    private data: boolean | null = null;

    constructor(interval: number){
        this.interval =  interval;
    };

    getData(): boolean | null {
        return this.data;
    };

    getKey(): string {
        return 'cookiesEnabled ';
    };

    startCollect(): void {
        try{
            this.data = navigator.cookieEnabled;
            setInterval(()=>{
                try{
                    this.data = navigator.cookieEnabled;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error) {
            console.log('Failed to start browser info collection:',error);
        }
    };

    finishCollect(): void {
        this.data = null;
    };
}

export class JavaScriptEnabledCollector implements Collector<boolean> {
    interval: number;
    private data: boolean | null = null;

    constructor(interval: number){
        this.interval =  interval;
    };

    getData(): boolean | null {
        return this.data;
    };

    getKey(): string {
        return 'javaScriptEnabled  ';
    };

    startCollect(): void {
        try{
            this.data = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
            setInterval(()=>{
                try{
                    this.data = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch(error){
            console.log('Failed to start browser info collection:',error);
        }
    };

    finishCollect(): void {
        this.data = null;
    };
}

export class OnlineStatusCollector implements Collector<boolean> {
    interval: number;
    private data: boolean | null = null;

    constructor(interval: number){
        this.interval =  interval;
    };

    getData(): boolean | null {
        return this.data;
    };

    getKey(): string {
        return 'onlineStatus';
    };

    startCollect(): void {
        try{
            this.data = navigator.onLine;
            setInterval(()=>{
                try{
                    this.data = navigator.onLine;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch(error){
            console.log('Failed to start browser info collection:',error);
        }
    };

    finishCollect(): void {
        this.data = null;
    };
}

export class ReferrerCollector implements Collector<string> {
    interval: number;
    private data: string | null = null;

    constructor(interval: number){
        this.interval = interval;
    };

    getData(): string | null {
        return this.data;
    };

    getKey(): string {
        return 'referrer';
    };

    startCollect(): void {
        try{
            this.data = document.referrer;
            setInterval(()=>{
                try{
                    this.data = document.referrer;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.log('Failed to start browser info collection:',error);
        }
    };

    finishCollect(): void {
        this.data = null;
    };
};

export class LocalStorageAvailableCollector implements Collector<boolean>{
    interval: number;
    private data: boolean |null = null;

    constructor(interval: number){
        this.interval = interval;
    };

    getData(): boolean | null {
        return this.data;
    };

    getKey(): string {
        return 'localStorageAvailable';
    };

    startCollect(): void {
        try{
            this.data = typeof(Storage) !== 'undefined';
            setInterval(()=>{
                try{
                    this.data = typeof(Storage) !== 'undefined';
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.log('Failed to start browser info collection:',error);
        }
    };

    finishCollect(): void {
        this.data = null;
    };
};

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

export class NetworkInformationCollector implements Collector<Promise<NetworkInformation | null>> {
    interval: number;
    intervalId: number | null = null;
    private data: NetworkInformation | null = null;
  
    constructor(interval: number) {
      this.interval = interval;
    }
  
    getData(): Promise<NetworkInformation | null> {
      return Promise.resolve(this.data);
    }
  
    getKey(): string {
      return 'networkInformation';
    }
  
    startCollect(): void {
        try{
            this.updateData();
            this.intervalId = setInterval(() => {
                try{
                    this.updateData();
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.log('Failed to start browser info collection:',error);
        }
    }
  
    finishCollect(): void {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.data = null;
    }
  
    private updateData(): void {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      this.data = connection || null;
    }
  }

export class ClipboardCollector implements Collector<object> {
    interval: number;
    private data: object | null = null;

    constructor(interval: number) {
        this.interval = interval;
    };

    getData(): object | null {
        return this.data;
    };

    getKey(): string {
        return 'clipboard';
    };

    startCollect(): void {
        try{
            this.data = navigator.clipboard;
            setInterval(()=>{
                try{
                    this.data = navigator.clipboard;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.error('Failed to start browser info collection:',error);
        }
    };

    finishCollect(): void {
        this.data = null;
    };
};


export class BrowserInfoCollector implements Collector<string> {
    interval: number;
    private data: string | null = null;

    constructor(interval: number) {
        this.interval = interval;
    };

    getData(): string | null {
        return this.data;
    }

    getKey(): string {
        return 'BrowserInfo';
    };

    startCollect(): void {
        try {
        this.collectData();
        setInterval(() => {
            try {
              this.collectData();
            } catch (error) {
              console.error('Error collecting browser info:',error);
              this.data = null;
            }
          }, this.interval);
        } catch (error) {
          console.error('Failed to start browser info collection:',error);
        }
    };
    
    finishCollect(): void {
        this.data = null;
    };
    
    private collectData(): void {
        try {
          const ua = navigator.userAgent;
          let tem;
          let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
          if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            this.data = 'IE ' + (tem[1] || '');
          } else if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) this.data = tem.slice(1).join(' ').replace('OPR', 'Opera');
          } else {
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
            this.data = M.join(' ');
          }
        } catch (error) {
          console.error('Error getting browser info:', error);
          this.data = null;
        }
    };
};

export class PlatformCollector implements Collector<string> {
    interval: number;
    private data: string | null = null;

    constructor(interval: number) {
        this.interval = interval;
    };

    getData(): string | null {
        return this.data;
    };

    getKey(): string {
        return 'platform ';
    };

    startCollect(): void {
        try{
            this.data = navigator.platform;
            setInterval(()=>{
                try{
                    this.data = navigator.platform;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.error('Error getting browser info:', error);
        }
    };

    finishCollect(): void {
        this.data = null;
    };
};

export class DeviceMemoryCollector  implements Collector<number| string| null> {
    interval: number;
    private data: number| string| null = null;

    constructor(interval: number) {
        this.interval = interval;
    };

    getData(): number| string| null {
        return this.data;
    };

    getKey(): string {
        return 'deviceMemory';
    };

    startCollect(): void {
        try{
            this.data = navigator.deviceMemory || 'unknown';
            setInterval(()=>{
                try{
                    this.data = navigator.deviceMemory || 'unknown';
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.error('Error getting browser info:', error);
        }
    };

    finishCollect(): void {
        this.data = null;
    };
};

export class HardwareConcurrencyCollector implements Collector<number> {
    public interval: number;
    private data: number | null = null;
  
    constructor(interval: number) {
      this.interval = interval;
    }
  
    getData(): number | null{
      return this.data;
    }

    getKey(): string {
        return 'HardwareConcurrency';
    }
  
    startCollect() {
        try{
            this.data = navigator.hardwareConcurrency;
            setInterval(()=>{
                try{
                    this.data = navigator.hardwareConcurrency;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.error('Error getting browser info:', error);
        }
    };
  
    finishCollect() {
        this .data = null
    };
};

export class PluginsCollector implements Collector<string[]> {
    public interval: number;
    private data: string[] | null = null;
  
    constructor(interval: number) {
      this.interval = interval;
    }
  
    getData(): string[] | null {
      return this.data;
    }

    getKey(): string {
        return 'plugins';
    }
  
    startCollect() {
        try{
            this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
            setInterval(()=>{
                try{
                    this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.error('Error getting browser info:', error);
        }
      };
  
    finishCollect() {
        this .data = null
    };
};

export class DoNotTrackCollector implements Collector<string> {
    public interval: number;
    private data: string | null = null;
  
    constructor(interval: number) {
      this.interval = interval;
    }
  
    getData(): string | null {
      return this.data;
    }

    getKey(): string {
        return 'doNotTrack';
    }
  
    startCollect() {
        try{
            this.data = navigator.doNotTrack || (window as any).doNotTrack || (navigator as any).msDoNotTrack;
            setInterval(()=>{
                try{
                    this.data = navigator.doNotTrack || (window as any).doNotTrack || (navigator as any).msDoNotTrack;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch(error){
            console.error('Error getting browser info:', error);
        }
    };
  
    finishCollect() {
        this .data = null
    };
};

export class CurrentUrlCollector implements Collector<string> {
    public interval: number;
    private data: string | null = null;
  
    constructor(interval: number) {
      this.interval = interval;
    }
  
    getData(): string | null {
      return this.data;
    }

    getKey(): string {
        return 'currentUrl ';
    }
  
    startCollect() {
        try{
            this.data = window.location.href;
            setInterval(()=>{
                try{
                    this.data = window.location.href;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch (error){
            console.error('Error getting browser info:', error);
        }
    };
  
    finishCollect() {
        this .data = null
    };
};

export class HistoryLengthCollector implements Collector<number> {
    public interval: number;
    private data: number | null = null;
  
    constructor(interval: number) {
      this.interval = interval;
    }
  
    getData(): number | null {
      return this.data;
    }

    getKey(): string {
        return 'historyLength';
    }
  
    startCollect() {
        try{
            this.data = window.history.length;
            setInterval(()=>{
                try{
                    this.data = window.history.length;
                  } catch(error){
                    console.error('Error collecting browser info:',error);
                    this.data = null;
                  }
            }, this.interval);
        } catch(error){
            console.error('Error getting browser info:', error);
        }
    };
  
    finishCollect() {
        this .data = null
    };
};

export class ColorDepthCollector implements Collector<number> {
    public interval: number;
    private data: number | null = null;
  
    constructor(interval: number) {
      this.interval = interval;
    }
  
    getData(): number | null {
      return this.data;
    }

    getKey(): string {
        return 'colorDepth';
    }
  
    startCollect() {
        try{
            this.data = screen.colorDepth;
            setInterval(()=>{
              try{
                this.data = screen.colorDepth;
              } catch(error){
                console.error('Error collecting browser info:',error);
                this.data = null;
              }
            }, this.interval);
        } catch (error){
            console.error('Error getting browser info:', error);
        }
    };
  
    finishCollect() {
        this .data = null
    };
};

export class TouchSupportCollector implements Collector<boolean> {
    public interval: number;
    private data: boolean | null = null;
  
    constructor(interval: number) {
      this.interval = interval;
    }
  
    getData(): boolean | null {
      return this.data;
    }

    getKey(): string {
        return 'touchSupport';
    }
  
    startCollect() {
        try{
            this.data = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0;
            setInterval(()=>{
             try{
                this.data = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0;
             } catch (error){
                console.error('Error collecting browser info:',error);
                this.data = null;
             }
            }, this.interval);
        } catch (error){
            console.error('Error getting browser info:', error);
        }
    };
  
    finishCollect() {
        this .data = null
    };
};