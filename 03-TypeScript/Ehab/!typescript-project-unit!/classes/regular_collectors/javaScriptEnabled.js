"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaScriptEnabled = void 0;
const eventsManager_1 = require("../../classes/eventsManager");
class javaScriptEnabled {
    constructor() {
        const confInterval = eventsManager_1.EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId = 0;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'javaScriptEnable';
    }
    startCollect() {
        if (eventsManager_1.EventsManager.IsEnabled) {
            try {
                let result = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
                if (typeof result === 'boolean') {
                    this.data = result;
                }
                this.intervalId = setInterval(() => {
                    if (!eventsManager_1.EventsManager.IsEnabled) {
                        this.finishCollect();
                        return;
                    }
                    result = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
                    if (typeof result === 'boolean') {
                        this.data = result;
                    }
                }, this.interval);
            }
            catch (err) {
                this.data = null;
            }
        }
    }
    finishCollect() {
        if (this.intervalId !== null && this.intervalId !== undefined && !eventsManager_1.EventsManager.IsEnabled) {
            clearInterval(this.intervalId);
            this.data = null;
        }
    }
}
exports.javaScriptEnabled = javaScriptEnabled;
