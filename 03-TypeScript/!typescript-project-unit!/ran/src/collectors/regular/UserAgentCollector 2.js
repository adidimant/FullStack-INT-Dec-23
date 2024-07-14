"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAgentCollector = void 0;
class UserAgentCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'userAgent';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting user agent:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start user agent collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = navigator.userAgent;
        }
        catch (error) {
            console.error('Error getting user agent:', error);
            this.data = null;
        }
    }
}
exports.UserAgentCollector = UserAgentCollector;
