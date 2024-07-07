"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseClick = void 0;
const classes_1 = require("../../classes");
class MouseClick {
    constructor(bufferSize) {
        this.data = [];
        this.bufferSize =
            bufferSize !== null && bufferSize !== void 0 ? bufferSize : classes_1.EventsManager.getConfig().DEFAULT_BUFFER_CONTINOUS_COLLECTORS;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `MouseClick`;
    }
    startCollect() {
        this.eventKey = document.addEventListener("click", (click) => {
            var _a;
            classes_1.Utils.maintainLastXItems(this.data, (_a = this.bufferSize) !== null && _a !== void 0 ? _a : 0, [click, Date.now()]);
        });
    }
    finishCollect() {
        removeEventListener("keypress", this.eventKey);
    }
}
exports.MouseClick = MouseClick;
