"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAgentCollector = void 0;
class UserAgentCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'userAgent';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.userAgent;
            }
            catch (error) {
                console.error('Error collecting user agent:', error);
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
exports.UserAgentCollector = UserAgentCollector;
