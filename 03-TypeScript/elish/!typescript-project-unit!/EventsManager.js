"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsManager = void 0;
class EventsManager {
    static getConfig(customerId) {
        return { COLLECTORS_INTERVAL: 60000, DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10, SDK_ENABLED: true };
    }
    static updateData(data) {
        fetch('https://acme-server.com/update', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .catch(error => console.error('Error updating data:', error));
    }
}
exports.EventsManager = EventsManager;
//דוגמא
/**
 * $.ajax({
    url: "/url/that/you/are/posting/to/",
    type: "POST",
    data: {
      key: `value`,
      anotherKey: `another value`
    },
    success: function success(data) {
      someSuccessFunction(data);
    },
    error: function error(error) {
      someErrorFunction(error);
    }
  });
 */
/**
 * const update = {
title: ‘A blog post by Moxilla’,
body: ‘The fetch API’,
userId: 1,
};
const options = {
method: ‘POST’,
headers: {
‘Content-Type’: ‘application/json’,
},
body: JSON.stringify(update),
};
 */
