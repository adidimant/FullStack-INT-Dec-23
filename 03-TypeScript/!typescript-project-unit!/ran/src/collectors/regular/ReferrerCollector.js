"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferrerCollector = void 0;
class ReferrerCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'referrer';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting referrer:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start referrer collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = document.referrer;
        }
        catch (error) {
            console.error('Error getting referrer:', error);
            this.data = null;
        }
    }
}
exports.ReferrerCollector = ReferrerCollector;
