"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaScriptEnabledCollector = void 0;
class JavaScriptEnabledCollector {
    constructor() {
        this.data = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'javaScriptEnabled';
    }
    startCollect() {
        this.data = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
    }
    finishCollect() {
        this.data = null;
    }
}
exports.JavaScriptEnabledCollector = JavaScriptEnabledCollector;
