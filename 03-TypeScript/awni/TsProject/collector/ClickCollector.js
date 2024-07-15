"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickCollector = void 0;
var Utils_1 = require("./Utils");
var ClickCollector = /** @class */ (function () {
    function ClickCollector(interval, bufferSize) {
        this.interval = interval || 60000;
        this.bufferSize = bufferSize || 10;
    }
    ClickCollector.prototype.getData = function () {
        return this.data;
    };
    ClickCollector.prototype.getKey = function () {
        return 'click';
    };
    ClickCollector.prototype.startCollect = function () {
        var _this = this;
        document.addEventListener('click', function (clickEvent) {
            _this.data = Utils_1.Utils.maintainLastXItems(_this.data, _this.bufferSize, clickEvent);
        });
    };
    ClickCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    ClickCollector.prototype.getLastItems = function () {
        return this.data;
    };
    return ClickCollector;
}());
exports.ClickCollector = ClickCollector;
