"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollCollector = void 0;
const Utils_1 = require("../../utils/Utils");
class ScrollCollector {
    constructor(interval, bufferSize) {
        this.data = [];
        this.handleScroll = () => {
            try {
                const scrollData = {
                    scrollX: window.scrollX,
                    scrollY: window.scrollY,
                    timestamp: Date.now()
                };
                this.data = Utils_1.Utils.maintainLastXItems(this.data, this.bufferSize, scrollData);
            }
            catch (error) {
                console.error('Error handling scroll:', error);
            }
        };
        this.interval = interval;
        this.bufferSize = bufferSize;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'scroll';
    }
    startCollect() {
        try {
            window.addEventListener('scroll', this.handleScroll);
        }
        catch (error) {
            console.error('Failed to start scroll collection:', error);
        }
    }
    finishCollect() {
        try {
            window.removeEventListener('scroll', this.handleScroll);
            this.data = [];
        }
        catch (error) {
            console.error('Error finishing scroll collection:', error);
        }
    }
}
exports.ScrollCollector = ScrollCollector;
