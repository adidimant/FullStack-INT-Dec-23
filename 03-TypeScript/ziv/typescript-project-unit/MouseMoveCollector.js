"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseMoveCollector = void 0;
class MouseMoveCollector {
    constructor(bufferSize = 50) {
        this.bufferSize = bufferSize;
        this.data = [];
    }
    getData() {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }
    getKey() {
        return 'mouseMove';
    }
    startCollect() {
        document.addEventListener('mousemove', (event) => {
            try {
                if (this.data.length >= this.bufferSize) {
                    this.data.shift();
                }
                this.data.push(event);
                console.log('Mouse move event collected:', event);
            }
            catch (error) {
                console.error('Error collecting mouse move event:', error);
                this.data.push(null);
            }
        });
    }
    finishCollect() {
        this.data = [];
    }
}
exports.MouseMoveCollector = MouseMoveCollector;
