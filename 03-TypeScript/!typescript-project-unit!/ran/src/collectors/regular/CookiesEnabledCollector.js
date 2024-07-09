"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookiesEnabledCollector = void 0;
class CookiesEnabledCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'cookiesEnabled';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting cookies enabled status:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start cookies enabled collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = navigator.cookieEnabled;
        }
        catch (error) {
            console.error('Error getting cookies enabled status:', error);
            this.data = null;
        }
    }
}
exports.CookiesEnabledCollector = CookiesEnabledCollector;
