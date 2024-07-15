"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserInfoCollector = void 0;
class BrowserInfoCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'browserInfo';
    }
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
    finishCollect() {
        this.data = null;
    }
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
}
exports.BrowserInfoCollector = BrowserInfoCollector;
