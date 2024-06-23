"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenWidthCollector = void 0;
var ScreenWidthCollector = /** @class */ (function () {
    function ScreenWidthCollector() {
        this.data = null;
    }
    ScreenWidthCollector.prototype.getData = function () {
        return this.data;
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
