"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCollector = void 0;
class LanguageCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'language';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting language:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start language collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = navigator.language || navigator.userLanguage;
        }
        catch (error) {
            console.error('Error getting language:', error);
            this.data = null;
        }
    }
}
exports.LanguageCollector = LanguageCollector;
