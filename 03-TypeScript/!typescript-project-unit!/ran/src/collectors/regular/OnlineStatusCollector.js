"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineStatusCollector = void 0;
class OnlineStatusCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'onlineStatus';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting online status:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start online status collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = navigator.onLine;
        }
        catch (error) {
            console.error('Error getting online status:', error);
            this.data = null;
        }
    }
}
exports.OnlineStatusCollector = OnlineStatusCollector;
