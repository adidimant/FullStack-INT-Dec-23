"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaScriptEnabledCollector = void 0;
class JavaScriptEnabledCollector {
    constructor(interval) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'javaScriptEnabled';
    }
    startCollect() {
        this.data = true;
        this.intervalId = window.setInterval(() => {
            try {
                this.data = true;
            }
            catch (error) {
                console.error('Error collecting JavaScript enabled data:', error);
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
exports.JavaScriptEnabledCollector = JavaScriptEnabledCollector;
