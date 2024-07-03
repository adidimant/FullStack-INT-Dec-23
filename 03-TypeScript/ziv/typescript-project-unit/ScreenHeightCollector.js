"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenHeightCollector = void 0;
class ScreenHeightCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'screenHeight';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = screen.height;
            }
            catch (error) {
                console.error('Error collecting screen height:', error);
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
exports.ScreenHeightCollector = ScreenHeightCollector;
