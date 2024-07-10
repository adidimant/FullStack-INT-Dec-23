"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenWidthCollector = void 0;
class ScreenWidthCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'screenWidth';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting screen width:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start screen width collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = window.screen.width;
        }
        catch (error) {
            console.error('Error getting screen width:', error);
            this.data = null;
        }
    }
}
exports.ScreenWidthCollector = ScreenWidthCollector;
