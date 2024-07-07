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
exports.NetWorkInformation = void 0;
const classes_1 = require("../../classes");
class NetWorkInformation {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `NetWorkInformation`;
    }
    startCollect() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const networkInfo = yield this.getNetworkInformation();
            console.log(networkInfo);
            this.data.push([networkInfo, Date.now()]);
            document.querySelector('#NetWorkInformation-div').textContent = (_a = JSON.stringify(networkInfo)) !== null && _a !== void 0 ? _a : "";
        });
    }
    finishCollect() {
    }
    getNetworkInformation() {
        return new Promise(resolve => {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            resolve(connection);
        });
    }
}
exports.NetWorkInformation = NetWorkInformation;
