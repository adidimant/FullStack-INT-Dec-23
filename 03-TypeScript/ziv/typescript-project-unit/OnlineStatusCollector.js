"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineStatusCollector = void 0;
class OnlineStatusCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'onlineStatus';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.onLine;
            }
            catch (error) {
                console.error('Error collecting online status:', error);
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
exports.OnlineStatusCollector = OnlineStatusCollector;
