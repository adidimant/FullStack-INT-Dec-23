"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceOrientation = void 0;
const classes_1 = require("../../classes");
class DeviceOrientation {
    constructor(bufferSize) {
        this.data = [];
        this.bufferSize = bufferSize !== null && bufferSize !== void 0 ? bufferSize : classes_1.EventsManager.getConfig().DEFAULT_BUFFER_CONTINOUS_COLLECTORS;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `DeviceOrientation`;
    }
    startCollect() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const event = yield this.getDeviceOrientation();
            if (event) {
                classes_1.Utils.maintainLastXItems(this.data, (_a = this.bufferSize) !== null && _a !== void 0 ? _a : 0, [event, Date.now()]);
            }
        });
    }
    getDeviceOrientation() {
        return new Promise(resolve => {
            window.addEventListener('deviceorientation', event => {
                resolve(event);
            }, { once: true });
        });
    }
    finishCollect() {
        removeEventListener("devicemotion", this.eventKey);
    }
}
exports.DeviceOrientation = DeviceOrientation;
