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
exports.clipboard = void 0;
const eventsManager_1 = require("../../classes/eventsManager");
class clipboard {
    constructor() {
        const confInterval = eventsManager_1.EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId = 0;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'clipboard';
    }
    collectData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield navigator.clipboard.writeText('clipboard test');
                this.data = yield navigator.clipboard.readText();
            }
            catch (error) {
                console.error("aaaaa");
            }
        });
    }
    startCollect() {
        if (eventsManager_1.EventsManager.IsEnabled) {
            this.collectData();
            this.intervalId = setInterval(() => {
                if (!eventsManager_1.EventsManager.IsEnabled) {
                    this.finishCollect();
                    return;
                }
                this.collectData();
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.intervalId !== null && this.intervalId !== undefined && !eventsManager_1.EventsManager.IsEnabled) {
            clearInterval(this.intervalId);
            this.data = null;
        }
    }
}
exports.clipboard = clipboard;
