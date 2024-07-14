"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClicksCollector = void 0;
const Utils_1 = require("../../utils/Utils");
class ClicksCollector {
    constructor(interval, bufferSize) {
        this.data = [];
        this.handleClick = (event) => {
            try {
                this.data = Utils_1.Utils.maintainLastXItems(this.data, this.bufferSize, event);
            }
            catch (error) {
                console.error('Error handling click:', error);
            }
        };
        this.interval = interval;
        this.bufferSize = bufferSize;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'clicks';
    }
    startCollect() {
        try {
            document.addEventListener('click', this.handleClick);
        }
        catch (error) {
            console.error('Failed to start clicks collection:', error);
        }
    }
    finishCollect() {
        try {
            document.removeEventListener('click', this.handleClick);
            this.data = [];
        }
        catch (error) {
            console.error('Error finishing clicks collection:', error);
        }
    }
}
exports.ClicksCollector = ClicksCollector;
