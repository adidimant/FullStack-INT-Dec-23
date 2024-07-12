"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenHeightCollector = exports.ScreenWidthCollector = void 0;
var ScreenWidthCollector = /** @class */ (function () {
    function ScreenWidthCollector(interval) {
        this.interval = interval || 60000;
    }
    ScreenWidthCollector.prototype.getData = function () {
        return this.data || 0;
    };
    ScreenWidthCollector.prototype.getKey = function () {
        return 'screenWidth';
    };
    ScreenWidthCollector.prototype.startCollect = function () {
        this.data = screen.width;
    };
    ScreenWidthCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return ScreenWidthCollector;
}());
exports.ScreenWidthCollector = ScreenWidthCollector;
var ScreenHeightCollector = /** @class */ (function () {
    function ScreenHeightCollector(interval) {
        this.interval = interval || 60000;
    }
    ScreenHeightCollector.prototype.getData = function () {
        return this.data;
    };
    ScreenHeightCollector.prototype.getKey = function () {
        return 'screenHeight';
    };
    ScreenHeightCollector.prototype.startCollect = function () {
        this.data = screen.height;
    };
    ScreenHeightCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return ScreenHeightCollector;
}());
exports.ScreenHeightCollector = ScreenHeightCollector;
