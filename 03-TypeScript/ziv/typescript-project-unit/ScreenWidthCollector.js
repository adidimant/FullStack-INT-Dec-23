"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenWidthCollector = void 0;
class ScreenWidthCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'screenWidth';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = screen.width;
            }
            catch (error) {
                console.error('Error collecting screen width:', error);
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
exports.ScreenWidthCollector = ScreenWidthCollector;
