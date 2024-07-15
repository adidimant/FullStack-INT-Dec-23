"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformCollector = void 0;
class PlatformCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'platform';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.platform;
            }
            catch (error) {
                console.error('Error collecting platform data:', error);
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
exports.PlatformCollector = PlatformCollector;
