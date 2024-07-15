"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeCollector = void 0;
const Utils_1 = require("../../utils/Utils");
class ResizeCollector {
    constructor(interval, bufferSize) {
        this.data = [];
        this.handleResize = () => {
            try {
                const resizeData = {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    timestamp: Date.now()
                };
                this.data = Utils_1.Utils.maintainLastXItems(this.data, this.bufferSize, resizeData);
            }
            catch (error) {
                console.error('Error handling resize:', error);
            }
        };
        this.interval = interval;
        this.bufferSize = bufferSize;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'resize';
    }
    startCollect() {
        try {
            window.addEventListener('resize', this.handleResize);
        }
        catch (error) {
            console.error('Failed to start resize collection:', error);
        }
    }
    finishCollect() {
        try {
            window.removeEventListener('resize', this.handleResize);
            this.data = [];
        }
        catch (error) {
            console.error('Error finishing resize collection:', error);
        }
    }
}
exports.ResizeCollector = ResizeCollector;
