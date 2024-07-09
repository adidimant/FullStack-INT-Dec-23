"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardPressCollector = void 0;
const Utils_1 = require("../../utils/Utils");
class KeyboardPressCollector {
    constructor(interval, bufferSize) {
        this.data = [];
        this.handleKeyPress = (event) => {
            try {
                this.data = Utils_1.Utils.maintainLastXItems(this.data, this.bufferSize, event);
            }
            catch (error) {
                console.error('Error handling key press:', error);
            }
        };
        this.interval = interval;
        this.bufferSize = bufferSize;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'keyboardPress';
    }
    startCollect() {
        try {
            document.addEventListener('keyup', this.handleKeyPress);
        }
        catch (error) {
            console.error('Failed to start keyboard press collection:', error);
        }
    }
    finishCollect() {
        try {
            document.removeEventListener('keyup', this.handleKeyPress);
            this.data = [];
        }
        catch (error) {
            console.error('Error finishing keyboard press collection:', error);
        }
    }
}
exports.KeyboardPressCollector = KeyboardPressCollector;
