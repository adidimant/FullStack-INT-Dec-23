"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimezoneCollector = void 0;
class TimezoneCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'timezone';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting timezone:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start timezone collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        catch (error) {
            console.error('Error getting timezone:', error);
            this.data = null;
        }
    }
}
exports.TimezoneCollector = TimezoneCollector;
