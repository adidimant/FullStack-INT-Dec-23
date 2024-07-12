"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaScriptEnabledCollector = void 0;
class JavaScriptEnabledCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'javaScriptEnabled';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting JavaScript enabled status:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start JavaScript enabled collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = true; // If this code is running, JavaScript is enabled
        }
        catch (error) {
            console.error('Error getting JavaScript enabled status:', error);
            this.data = null;
        }
    }
}
exports.JavaScriptEnabledCollector = JavaScriptEnabledCollector;
