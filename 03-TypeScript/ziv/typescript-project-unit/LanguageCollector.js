"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCollector = void 0;
class LanguageCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'language';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.language;
            }
            catch (error) {
                console.error('Error collecting language data:', error);
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
exports.LanguageCollector = LanguageCollector;
