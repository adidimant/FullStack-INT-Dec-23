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
exports.ClipboardCollector = void 0;
class ClipboardCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'clipboard';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => __awaiter(this, void 0, void 0, function* () {
            try {
                if (navigator.clipboard) {
                    this.data = yield navigator.clipboard.readText();
                }
            }
            catch (error) {
                console.error('Error collecting clipboard data:', error);
                this.data = null;
            }
        }), this.interval);
    }
    finishCollect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
exports.ClipboardCollector = ClipboardCollector;
