"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoNotTrackCollector = void 0;
var DoNotTrackCollector = /** @class */ (function () {
    function DoNotTrackCollector(interval) {
        this.interval = interval || 60000;
    }
    DoNotTrackCollector.prototype.getData = function () {
        return this.data;
    };
    DoNotTrackCollector.prototype.getKey = function () {
        return 'doNotTrack';
    };
    DoNotTrackCollector.prototype.startCollect = function () {
        this.data = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
    };
    DoNotTrackCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return DoNotTrackCollector;
}());
exports.DoNotTrackCollector = DoNotTrackCollector;
