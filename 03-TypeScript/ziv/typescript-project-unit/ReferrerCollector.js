"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferrerCollector = void 0;
class ReferrerCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'referrer';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = document.referrer;
            }
            catch (error) {
                console.error('Error collecting referrer:', error);
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
exports.ReferrerCollector = ReferrerCollector;
