"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUrlCollector = void 0;
var CurrentUrlCollector = /** @class */ (function () {
    function CurrentUrlCollector(interval) {
        this.interval = interval || 60000;
    }
    CurrentUrlCollector.prototype.getData = function () {
        return this.data;
    };
    CurrentUrlCollector.prototype.getKey = function () {
        return 'currentUrl';
    };
    CurrentUrlCollector.prototype.startCollect = function () {
        this.data = window.location.href;
    };
    CurrentUrlCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return CurrentUrlCollector;
}());
exports.CurrentUrlCollector = CurrentUrlCollector;
