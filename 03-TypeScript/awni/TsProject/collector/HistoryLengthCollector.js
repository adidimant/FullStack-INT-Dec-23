"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryLengthCollector = void 0;
var HistoryLengthCollector = /** @class */ (function () {
    function HistoryLengthCollector(interval) {
        this.interval = interval || 60000;
    }
    HistoryLengthCollector.prototype.getData = function () {
        return this.data;
    };
    HistoryLengthCollector.prototype.getKey = function () {
        return 'historyLength';
    };
    HistoryLengthCollector.prototype.startCollect = function () {
        this.data = window.history.length;
    };
    HistoryLengthCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return HistoryLengthCollector;
}());
exports.HistoryLengthCollector = HistoryLengthCollector;
