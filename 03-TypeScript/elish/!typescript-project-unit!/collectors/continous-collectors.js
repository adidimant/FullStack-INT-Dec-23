"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseMoveCollector = void 0;
const Utils_1 = require("../utils/Utils");
class MouseMoveCollector {
    constructor(interval, bufferSize) {
        this.data = [];
        this.handleMouseMove = (event) => {
            try {
                this.data = Utils_1.Utils.maintainLastXItems(this.data, this.bufferSize, event);
            }
            catch (error) {
                console.error('Error handling mouse move:', error);
            }
        };
        this.interval = interval;
        this.bufferSize = bufferSize;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'mouseMove';
    }
    startCollect() {
        try {
            document.addEventListener('mousemove', this.handleMouseMove);
        }
        catch (error) {
            console.error('Failed to start mouse move collection:', error);
        }
    }
    finishCollect() {
        try {
            document.removeEventListener('mousemove', this.handleMouseMove);
            this.data = [];
        }
        catch (error) {
            console.error('Error finishing mouse move collection:', error);
        }
    }
}
exports.MouseMoveCollector = MouseMoveCollector;
