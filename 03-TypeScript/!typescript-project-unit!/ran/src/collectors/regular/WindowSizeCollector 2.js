"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowSizeCollector = void 0;
class WindowSizeCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'windowSize';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting window size:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start window size collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
        catch (error) {
            console.error('Error getting window size:', error);
            this.data = null;
        }
    }
}
exports.WindowSizeCollector = WindowSizeCollector;
