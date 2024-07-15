"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenOrientationCollector = void 0;
class ScreenOrientationCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'screenOrientation';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting screen orientation:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start screen orientation collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            if (screen.orientation) {
                this.data = screen.orientation.type;
            }
            else {
                this.data = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
            }
        }
        catch (error) {
            console.error('Error getting screen orientation:', error);
            this.data = null;
        }
    }
}
exports.ScreenOrientationCollector = ScreenOrientationCollector;
