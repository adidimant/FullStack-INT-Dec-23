"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenHeightCollector = void 0;
class ScreenHeightCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'screenHeight';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting screen height:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start screen height collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = window.screen.height;
        }
        catch (error) {
            console.error('Error getting screen height:', error);
            this.data = null;
        }
    }
}
exports.ScreenHeightCollector = ScreenHeightCollector;
