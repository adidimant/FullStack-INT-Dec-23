"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsCollector = void 0;
class PluginsCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'plugins';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
            }
            catch (error) {
                console.error('Error collecting plugins data:', error);
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
exports.PluginsCollector = PluginsCollector;
