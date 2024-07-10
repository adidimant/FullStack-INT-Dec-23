"use strict";
// collectors/ScreenWidthCollector.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenWidthCollector = void 0;
class ScreenWidthCollector {
    constructor() {
        this.data = null;
        this.interval = 10000; // Example interval, adjust as needed
        this.data = window.screen.width;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'screenWidth';
    }
    startCollect() {
        // Example implementation to start collecting
        setInterval(() => {
            this.data = window.screen.width;
        }, this.interval);
    }
    finishCollect() {
        // Example implementation to finish collecting
        this.data = null;
    }
}
exports.ScreenWidthCollector = ScreenWidthCollector;
