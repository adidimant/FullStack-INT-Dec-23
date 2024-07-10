var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class EventsManager {
    constructor(customerId) {
        this.customerId = customerId;
    }
    getConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            // await fetch(`https://acme-server.com/conf?customerId=${this.customerId}`)
            //     .then(response => {
            //         if (!response.ok) {
            //             throw new Error('Network response was not ok');
            //         }
            //         return response.json();
            //     })
            //     .then((data) => {
            //         let configuration1 = data;
            //         return configuration1
            //     })
            //     .catch(error => {
            //         console.error('There was a problem with fetch operation:', error);
            //     });
            const config = { COLLECTORS_INTERVAL: 60000,
                DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
                SDK_ENABLED: true };
            localStorage.setItem('acme-sdk-config', JSON.stringify(config));
            return config;
        });
    }
    static updateData(collectorsData) {
        return __awaiter(this, void 0, void 0, function* () {
            // fetch("https://acme-server.com/conf?customerId=${this.customerId}", {
            //     method: "POST",
            //     body: JSON.stringify(collectorsData),
            //     headers: {
            //       "Content-type": "application/json; charset=UTF-8"
            //     }
            //   })
            //     .then((response) => response.json())
            //     .then((json) => console.log(json));
            console.log(collectorsData);
            localStorage.setItem('collectorsData', JSON.stringify(collectorsData));
        });
    }
    static getCollectorData() {
        const collectorsDataJSON = localStorage.getItem('collectorsData');
        let collectorsData = {};
        if (collectorsDataJSON) {
            collectorsData = JSON.parse(collectorsDataJSON);
        }
        return collectorsData;
    }
}
