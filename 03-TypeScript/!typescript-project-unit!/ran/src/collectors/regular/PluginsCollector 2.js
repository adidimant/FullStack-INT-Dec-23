"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsCollector = void 0;
class PluginsCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'plugins';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting plugins:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start plugins collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
        }
        catch (error) {
            console.error('Error getting plugins:', error);
            this.data = null;
        }
    }
}
exports.PluginsCollector = PluginsCollector;
