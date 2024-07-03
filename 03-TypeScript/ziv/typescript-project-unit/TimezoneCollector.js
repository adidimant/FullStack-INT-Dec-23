"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimezoneCollector = void 0;
class TimezoneCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'timeZone';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
            }
            catch (error) {
                console.error('Error collecting time zone:', error);
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
exports.TimezoneCollector = TimezoneCollector;
