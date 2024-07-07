"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyPress = void 0;
const classes_1 = require("../../classes");
class KeyPress {
    constructor(bufferSize) {
        this.data = [];
        this.bufferSize = bufferSize !== null && bufferSize !== void 0 ? bufferSize : classes_1.EventsManager.getConfig().DEFAULT_BUFFER_CONTINOUS_COLLECTORS;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `KeyPress`;
    }
    startCollect() {
        this.eventKey = document.addEventListener("keypress", (keypress) => {
            var _a;
            classes_1.Utils.maintainLastXItems(this.data, (_a = this.bufferSize) !== null && _a !== void 0 ? _a : 0, [keypress, Date.now()]);
        });
    }
    finishCollect() {
        removeEventListener("keypress", this.eventKey);
    }
}
exports.KeyPress = KeyPress;
