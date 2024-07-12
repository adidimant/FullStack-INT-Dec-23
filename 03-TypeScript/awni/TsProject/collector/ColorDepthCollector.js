"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorDepthCollector = void 0;
var ColorDepthCollector = /** @class */ (function () {
    function ColorDepthCollector(interval) {
        this.interval = interval || 60000;
    }
    ColorDepthCollector.prototype.getData = function () {
        return this.data;
    };
    ColorDepthCollector.prototype.getKey = function () {
        return 'colorDepth';
    };
    ColorDepthCollector.prototype.startCollect = function () {
        this.data = screen.colorDepth;
    };
    ColorDepthCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return ColorDepthCollector;
}());
exports.ColorDepthCollector = ColorDepthCollector;
