"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformCollector = void 0;
class PlatformCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'platform';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting platform:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start platform collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = navigator.platform;
        }
        catch (error) {
            console.error('Error getting platform:', error);
            this.data = null;
        }
    }
}
exports.PlatformCollector = PlatformCollector;
