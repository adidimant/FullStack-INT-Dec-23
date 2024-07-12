"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMotionCollector = void 0;
var Utils_1 = require("./Utils");
var DeviceMotionCollector = /** @class */ (function () {
    function DeviceMotionCollector(interval, bufferSize) {
        this.interval = interval || 60000;
        this.bufferSize = bufferSize || 40;
    }
    DeviceMotionCollector.prototype.getData = function () {
        return this.data;
    };
    DeviceMotionCollector.prototype.getKey = function () {
        return 'deviceMotion';
    };
    DeviceMotionCollector.prototype.startCollect = function () {
        var _this = this;
        window.addEventListener('devicemotion', function (event) {
            _this.data = Utils_1.Utils.maintainLastXItems(_this.data, _this.bufferSize, event);
        }, { once: true });
    };
    DeviceMotionCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    DeviceMotionCollector.prototype.getLastItems = function () {
        return this.data;
    };
    return DeviceMotionCollector;
}());
exports.DeviceMotionCollector = DeviceMotionCollector;
