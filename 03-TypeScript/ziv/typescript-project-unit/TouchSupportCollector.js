"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchSupportCollector = void 0;
class TouchSupportCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'touchSupport';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            }
            catch (error) {
                console.error('Error collecting touch support data:', error);
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
exports.TouchSupportCollector = TouchSupportCollector;
