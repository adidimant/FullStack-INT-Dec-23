"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityChangeCollector = void 0;
const Utils_1 = require("../../utils/Utils");
class VisibilityChangeCollector {
    constructor(interval, bufferSize) {
        this.data = [];
        this.handleVisibilityChange = () => {
            try {
                const visibilityData = {
                    isVisible: !document.hidden,
                    timestamp: Date.now()
                };
                this.data = Utils_1.Utils.maintainLastXItems(this.data, this.bufferSize, visibilityData);
            }
            catch (error) {
                console.error('Error handling visibility change:', error);
            }
        };
        this.interval = interval;
        this.bufferSize = bufferSize;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'visibilityChange';
    }
    startCollect() {
        try {
            document.addEventListener('visibilitychange', this.handleVisibilityChange);
        }
        catch (error) {
            console.error('Failed to start visibility change collection:', error);
        }
    }
    finishCollect() {
        try {
            document.removeEventListener('visibilitychange', this.handleVisibilityChange);
            this.data = [];
        }
        catch (error) {
            console.error('Error finishing visibility change collection:', error);
        }
    }
}
exports.VisibilityChangeCollector = VisibilityChangeCollector;
