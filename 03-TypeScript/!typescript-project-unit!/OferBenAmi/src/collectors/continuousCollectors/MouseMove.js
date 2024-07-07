"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseMove = void 0;
const classes_1 = require("../../classes");
class MouseMove {
    constructor(bufferSize) {
        this.data = [];
        this.bufferSize =
            bufferSize !== null && bufferSize !== void 0 ? bufferSize : classes_1.EventsManager.getConfig().DEFAULT_BUFFER_CONTINOUS_COLLECTORS;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `MouseMove`;
    }
    startCollect() {
        this.eventKey = document.addEventListener("mousemove", (mousemoveEvent) => {
            var _a;
            classes_1.Utils.maintainLastXItems(this.data, (_a = this.bufferSize) !== null && _a !== void 0 ? _a : 0, [mousemoveEvent, Date.now()]);
        });
    }
    finishCollect() {
        removeEventListener("mousemove", this.eventKey);
    }
}
exports.MouseMove = MouseMove;
