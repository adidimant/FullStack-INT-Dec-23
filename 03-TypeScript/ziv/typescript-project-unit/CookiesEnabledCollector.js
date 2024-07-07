"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookiesEnabledCollector = void 0;
class CookiesEnabledCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'cookiesEnabled';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.cookieEnabled;
            }
            catch (error) {
                console.error('Error collecting cookies enabled:', error);
                this.data = null;
            }
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
exports.CookiesEnabledCollector = CookiesEnabledCollector;
