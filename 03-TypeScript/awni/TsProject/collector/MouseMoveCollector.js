"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseMoveCollector = void 0;
var Utils_1 = require("./Utils");
var MouseMoveCollector = /** @class */ (function () {
    function MouseMoveCollector(interval, bufferSize) {
        this.interval = interval || 60000;
        this.bufferSize = bufferSize || 50;
    }
    MouseMoveCollector.prototype.getData = function () {
        return this.data;
    };
    MouseMoveCollector.prototype.getKey = function () {
        return 'mouseMove';
    };
    MouseMoveCollector.prototype.startCollect = function () {
        var _this = this;
        document.addEventListener('mousemove', function (mousemoveEvent) {
            _this.data = Utils_1.Utils.maintainLastXItems(_this.data, _this.bufferSize, mousemoveEvent);
        });
    };
    MouseMoveCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    MouseMoveCollector.prototype.getLastItems = function () {
        return this.data;
    };
    return MouseMoveCollector;
}());
exports.MouseMoveCollector = MouseMoveCollector;
