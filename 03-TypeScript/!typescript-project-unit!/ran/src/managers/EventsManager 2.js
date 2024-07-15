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
exports.EventsManager = void 0;
class EventsManager {
    constructor() {
        this.config = null;
    }
    static getInstance() {
        if (!EventsManager.instance) {
            EventsManager.instance = new EventsManager();
        }
        return EventsManager.instance;
    }
    getConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.config) {
                // In a real implementation, this would fetch from "https://acme-server.com/conf"
                // For this example, we'll return a constant object
                this.config = {
                    COLLECTORS_INTERVAL: 60000,
                    DEFAULT_BUFFER_CONTINUOUS_COLLECTORS: 10,
                    SDK_ENABLED: true
                };
            }
            return this.config;
        });
    }
    updateData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // In a real implementation, this would send a POST request
            console.log('Sending data to server:', data);
        });
    }
}
exports.EventsManager = EventsManager;
