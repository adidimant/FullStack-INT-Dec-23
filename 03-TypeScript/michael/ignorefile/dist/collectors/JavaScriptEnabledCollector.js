"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaScriptEnabledCollector = void 0;
var JavaScriptEnabledCollector = /** @class */ (function () {
    function JavaScriptEnabledCollector() {
        this.data = null;
    }
    JavaScriptEnabledCollector.prototype.getData = function () {
        return this.data;
    };
    JavaScriptEnabledCollector.prototype.getKey = function () {
        return 'javaScriptEnabled';
    };
    JavaScriptEnabledCollector.prototype.startCollect = function () {
        this.data = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
    };
    JavaScriptEnabledCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return JavaScriptEnabledCollector;
}());
exports.JavaScriptEnabledCollector = JavaScriptEnabledCollector;
