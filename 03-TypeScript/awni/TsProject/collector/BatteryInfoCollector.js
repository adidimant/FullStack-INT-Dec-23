"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatteryInfoCollector = void 0;
var BatteryInfoCollector = /** @class */ (function () {
    function BatteryInfoCollector(interval) {
        this.interval = interval || 60000;
    }
    BatteryInfoCollector.prototype.getData = function () {
        return this.data;
    };
    BatteryInfoCollector.prototype.getKey = function () {
        return 'batteryInfo';
    };
    BatteryInfoCollector.prototype.startCollect = function () {
        var _this = this;
        navigator.getBattery().then(function (battery) {
            _this.data = battery;
        });
    };
    BatteryInfoCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return BatteryInfoCollector;
}());
exports.BatteryInfoCollector = BatteryInfoCollector;
