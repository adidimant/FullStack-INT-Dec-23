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
    static getConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            // חזרה של קונפיגורציה קבועה במקום fetch אמיתי
            // const response = await fetch(`https://acme-server.com/conf?customerId=YOUR_CUSTOMER_ID`);
            // return response.json();
            return {
                COLLECTORS_INTERVAL: 60000,
                DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
                SDK_ENABLED: true
            };
        });
    }
    static updateData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // שליחה לשרת
            yield fetch('https://acme-server.com/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        });
    }
}
exports.EventsManager = EventsManager;
