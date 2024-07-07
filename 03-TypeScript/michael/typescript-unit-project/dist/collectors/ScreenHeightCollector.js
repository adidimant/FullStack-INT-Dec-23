"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenHeightCollector = void 0;
var ScreenHeightCollector = /** @class */ (function () {
    function ScreenHeightCollector() {
        this.data = null;
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
