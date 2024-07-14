"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsManager = void 0;
class EventsManager {
    constructor() {
    }
    static getConfig() {
        const config = localStorage.getItem('sdkConfig');
        if (!config) {
            console.error('sdkConfig not found');
        }
        else {
            return JSON.parse(config);
        }
    }
    updateData() {
    }
}
exports.EventsManager = EventsManager;
