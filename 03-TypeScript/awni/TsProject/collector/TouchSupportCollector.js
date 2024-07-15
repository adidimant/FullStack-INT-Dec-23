"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchSupportCollector = void 0;
var TouchSupportCollector = /** @class */ (function () {
    function TouchSupportCollector(interval) {
        this.interval = interval || 60000;
    }
    TouchSupportCollector.prototype.getData = function () {
        return this.data;
    };
    TouchSupportCollector.prototype.getKey = function () {
        return 'touchSupport';
    };
    TouchSupportCollector.prototype.startCollect = function () {
        this.data = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    };
    TouchSupportCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return TouchSupportCollector;
}());
exports.TouchSupportCollector = TouchSupportCollector;
