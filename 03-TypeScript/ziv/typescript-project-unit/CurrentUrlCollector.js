"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUrlCollector = void 0;
class CurrentUrlCollector {
    constructor(interval) {
        this.intervalId = null;
        this.interval = interval;
        this.data = window.location.href; // אוסף את כתובת ה-URL הנוכחית
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'currentUrl';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                const currentUrl = window.location.href;
                if (this.data !== currentUrl) {
                    this.data = currentUrl;
                    console.log('URL updated:', this.data);
                }
            }
            catch (error) {
                console.error('Error collecting current URL data:', error);
                this.data = null;
            }
        }, this.interval); // בודק כל שנייה אם ה-URL השתנה
    }
    finishCollect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
exports.CurrentUrlCollector = CurrentUrlCollector;
