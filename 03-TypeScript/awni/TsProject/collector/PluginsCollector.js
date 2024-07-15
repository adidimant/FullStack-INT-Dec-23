"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsCollector = void 0;
var PluginsCollector = /** @class */ (function () {
    function PluginsCollector(interval) {
        this.interval = interval || 60000;
    }
    PluginsCollector.prototype.getData = function () {
        return this.data;
    };
    PluginsCollector.prototype.getKey = function () {
        return 'plugins';
    };
    PluginsCollector.prototype.startCollect = function () {
        this.data = Array.from(navigator.plugins).map(function (plugin) { return plugin.name; });
    };
    PluginsCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return PluginsCollector;
}());
exports.PluginsCollector = PluginsCollector;
