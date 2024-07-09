"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorDepthCollector = void 0;
class ColorDepthCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'colorDepth';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting color depth:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start color depth collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = screen.colorDepth;
        }
        catch (error) {
            console.error('Error getting color depth:', error);
            this.data = null;
        }
    }
}
exports.ColorDepthCollector = ColorDepthCollector;
