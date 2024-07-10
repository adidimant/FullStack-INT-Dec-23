"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchSupportCollector = void 0;
class TouchSupportCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'touchSupport';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting touch support:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start touch support collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        }
        catch (error) {
            console.error('Error getting touch support:', error);
            this.data = null;
        }
    }
}
exports.TouchSupportCollector = TouchSupportCollector;
