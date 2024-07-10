"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyUpCollector = void 0;
class KeyUpCollector {
    constructor(bufferSize = 50) {
        this.bufferSize = bufferSize;
        this.data = [];
    }
    getData() {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }
    getKey() {
        return 'keyUp';
    }
    startCollect() {
        document.addEventListener('keyup', (event) => {
            try {
                if (this.data.length >= this.bufferSize) {
                    this.data.shift();
                }
                this.data.push(event);
                console.log('Key up event collected:', event);
            }
            catch (error) {
                console.error('Error collecting key up event:', error);
                this.data.push(null);
            }
        });
    }
    finishCollect() {
        this.data = [];
    }
}
exports.KeyUpCollector = KeyUpCollector;
