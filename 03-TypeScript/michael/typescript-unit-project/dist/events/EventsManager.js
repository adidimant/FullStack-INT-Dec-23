"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsManager = void 0;
var EventsManager = /** @class */ (function () {
    function EventsManager() {
    }
    EventsManager.getConfig = function () {
        // Example URL: "https://acme-server.com/conf?customerId=12345"
        return { COLLECTORS_INTERVAL: 60000, DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10, SDK_ENABLED: true };
    };
    EventsManager.updateData = function (data) {
        fetch('https://acme-server.com/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };
    return EventsManager;
}());
exports.EventsManager = EventsManager;
