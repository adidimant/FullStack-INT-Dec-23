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
    static getConfig(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
              const response = await fetch(`https://acme-server.com/conf?customerId=${customerId}`);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
               const data = await response.json();
                return data;
             */
            const config = {
                COLLECTORS_INTERVAL: 60000,
                DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
                SDK_ENABLED: this.IsEnabled
            };
            return config;
        });
    }
    static updateData(collectors) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
            const data: { [key: string]: collectors } ={};
            collectors.forEach((collector)=> {
              let key: string = collector.getKey();
              data[key] = collector.getData
            });
            try {
              const response = await fetch('https://acme-server.com/update', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
              });
        
              if (!response.ok) {
                  throw new Error('Failed to update data on the server');
              }
        
              const responseData = await response.json();
              console.log('Data updated successfully:', responseData);
              return responseData; // You can handle the response as needed
          } catch (error) {
              console.error('Error updating data:', error);
              throw error;
          }
          */
        });
    }
    static getConfiguration() {
        let jsonString = window.localStorage.getItem("configuration");
        let data;
        if (jsonString) {
            data = JSON.parse(jsonString);
        }
        else {
            return undefined;
        }
    }
    static getInterval() {
        try {
            let configuration = this.getConfiguration();
            if (configuration) {
                return configuration['COLLECTORS_INTERVAL'];
            }
            return -1;
        }
        catch (error) {
            return -1;
        }
    }
    static getDefaultBufferContinousCcollectors() {
        try {
            let configuration = this.getConfiguration();
            if (configuration) {
                return configuration['DEFAULT_BUFFER_CONTINOUS_COLLECTORS'];
            }
            return -1;
        }
        catch (error) {
            return -1;
        }
    }
}
exports.EventsManager = EventsManager;
EventsManager.IsEnabled = false;
