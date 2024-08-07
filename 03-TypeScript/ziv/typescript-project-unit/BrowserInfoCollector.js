"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserInfoCollector = void 0;
class BrowserInfoCollector {
    constructor(interval) {
        this.intervalId = null;
        this.interval = interval;
        this.data = null;
    }
    getKey() {
        return 'browserInfo';
    }
    getData() {
        return this.data;
    }
    collectBrowserInfo() {
        try {
            const ua = navigator.userAgent;
            let tem = null;
            let M = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i);
            if (M && /trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua);
                this.data = 'IE ' + (tem ? tem[1] : '');
                return;
            }
            if (M && M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem) {
                    this.data = tem.slice(1).join(' ').replace('OPR', 'Opera');
                    return;
                }
            }
            if (M) {
                const versionMatch = ua.match(/version\/(\d+)/i);
                const browserInfo = M[2]
                    ? [M[1], M[2], '']
                    : [navigator.appName || 'Unknown', navigator.appVersion || 'Unknown', '-?'];
                if (versionMatch) {
                    browserInfo.splice(1, 1, versionMatch[1]);
                }
                this.data = browserInfo.join(' ');
            }
            else {
                this.data = `${navigator.userAgent}`;
            }
        }
        catch (error) {
            console.error('Error collecting browser info data:', error);
            this.data = null;
        }
    }
    startCollect() {
        this.collectBrowserInfo();
        this.intervalId = window.setInterval(() => {
            this.collectBrowserInfo();
        }, this.interval);
    }
    finishCollect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
exports.BrowserInfoCollector = BrowserInfoCollector;
