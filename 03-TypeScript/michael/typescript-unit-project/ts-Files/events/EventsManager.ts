// ts-files/events/EventsManager.ts

import { SDKConfig } from '../interfaces';

export class EventsManager {
  static getConfig(): SDKConfig {
    // Example URL: "https://acme-server.com/conf?customerId=12345"
    return {
      COLLECTORS_INTERVAL: 60000,
      DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
      SDK_ENABLED: true
    };
  }

  static updateData(data: object): void {
    fetch('https://acme-server.com/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
}
