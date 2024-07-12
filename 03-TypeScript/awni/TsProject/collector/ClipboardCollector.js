"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipboardCollector = void 0;
var ClipboardCollector = /** @class */ (function () {
    function ClipboardCollector(interval) {
        this.interval = interval || 60000;
    }
    ClipboardCollector.prototype.getData = function () {
        return this.data;
    };
    ClipboardCollector.prototype.getKey = function () {
        return 'clipboard';
    };
    ClipboardCollector.prototype.startCollect = function () {
        this.data = navigator.clipboard;
    };
    ClipboardCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return ClipboardCollector;
}());
exports.ClipboardCollector = ClipboardCollector;
