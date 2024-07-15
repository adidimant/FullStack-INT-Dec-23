"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUrlCollector = void 0;
class CurrentUrlCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'currentUrl';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting current URL:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start current URL collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = window.location.href;
        }
        catch (error) {
            console.error('Error getting current URL:', error);
            this.data = null;
        }
    }
}
exports.CurrentUrlCollector = CurrentUrlCollector;
