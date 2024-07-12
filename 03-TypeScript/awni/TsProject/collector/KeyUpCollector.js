"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyUpCollector = void 0;
var Utils_1 = require("./Utils");
var KeyUpCollector = /** @class */ (function () {
    function KeyUpCollector(interval, bufferSize) {
        this.data = [];
        this.interval = interval || 60000;
        this.bufferSize = bufferSize || 50;
    }
    KeyUpCollector.prototype.getData = function () {
        return this.data;
    };
    KeyUpCollector.prototype.getKey = function () {
        return 'keyUp';
    };
    KeyUpCollector.prototype.startCollect = function () {
        var _this = this;
        document.addEventListener('keyup', function (keyupEvent) {
            _this.data = Utils_1.Utils.maintainLastXItems(_this.data, _this.bufferSize, keyupEvent);
        });
    };
    KeyUpCollector.prototype.finishCollect = function () {
        this.data = [];
    };
    KeyUpCollector.prototype.getLastItems = function () {
        return this.data;
    };
    return KeyUpCollector;
}());
exports.KeyUpCollector = KeyUpCollector;
