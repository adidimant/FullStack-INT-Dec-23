"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardwareConcurrencyCollector = void 0;
var HardwareConcurrencyCollector = /** @class */ (function () {
    function HardwareConcurrencyCollector(interval) {
        this.interval = interval || 60000;
    }
    HardwareConcurrencyCollector.prototype.getData = function () {
        return this.data;
    };
    HardwareConcurrencyCollector.prototype.getKey = function () {
        return 'hardwareConcurrency';
    };
    HardwareConcurrencyCollector.prototype.startCollect = function () {
        this.data = navigator.hardwareConcurrency;
    };
    HardwareConcurrencyCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return HardwareConcurrencyCollector;
}());
exports.HardwareConcurrencyCollector = HardwareConcurrencyCollector;
