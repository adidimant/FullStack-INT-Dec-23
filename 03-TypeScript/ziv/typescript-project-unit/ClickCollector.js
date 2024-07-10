"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickCollector = void 0;
class ClickCollector {
    constructor(bufferSize = 10) {
        this.bufferSize = bufferSize;
        this.data = [];
    }
    getData() {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }
    getKey() {
        return 'click';
    }
    startCollect() {
        document.addEventListener('click', (event) => {
            try {
                if (this.data.length >= this.bufferSize) {
                    this.data.shift();
                }
                this.data.push(event);
                console.log('Click event collected:', event);
            }
            catch (error) {
                console.error('Error collecting click event:', error);
                this.data.push(null);
            }
        });
    }
    finishCollect() {
        this.data = [];
    }
}
exports.ClickCollector = ClickCollector;
