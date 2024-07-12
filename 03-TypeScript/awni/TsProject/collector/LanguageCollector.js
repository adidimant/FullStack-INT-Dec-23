"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCollector = void 0;
var LanguageCollector = /** @class */ (function () {
    function LanguageCollector(interval) {
        this.interval = interval || 60000;
    }
    LanguageCollector.prototype.getData = function () {
        return this.data;
    };
    LanguageCollector.prototype.getKey = function () {
        return 'language';
    };
    LanguageCollector.prototype.startCollect = function () {
        this.data = navigator.language;
    };
    LanguageCollector.prototype.finishCollect = function () {
        this.data = '';
    };
    return LanguageCollector;
}());
exports.LanguageCollector = LanguageCollector;
