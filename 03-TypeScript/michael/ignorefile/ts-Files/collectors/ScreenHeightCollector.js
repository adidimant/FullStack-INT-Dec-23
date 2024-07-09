"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenHeightCollector = void 0;
class ScreenHeightCollector {
    constructor() {
        this.data = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'screenHeight';
    }
    startCollect() {
        this.data = screen.height;
    }
    finishCollect() {
        this.data = null;
    }
}
exports.ScreenHeightCollector = ScreenHeightCollector;
