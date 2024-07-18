var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Utils } from '../utils/Utils';
export class configuration {
    constructor() {
        this.TEST_CONFIG = {
            COLLECTORS_INTERVAL: 60000,
            DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
            SDK_ENABLED: true
        };
        this.customerId = this.getOrGenerateCustomerId();
        this.startFetchingConfiguration();
    }
    getOrGenerateCustomerId() {
        let savedCustomerId = localStorage.getItem('customerId');
        if (!savedCustomerId) {
            savedCustomerId = Utils.generateUUID();
            localStorage.setItem('customerId', savedCustomerId);
        }
        return savedCustomerId;
    }
    saveConfig(configObj) {
        localStorage.setItem('sdkConfig', JSON.stringify(configObj));
    }
    getConfigFromStorage() {
        const config = localStorage.getItem('sdkConfig');
        if (config) {
            return JSON.parse(config);
        }
        return null;
    }
    fetchConfiguration() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.customerId) {
                console.error('Customer ID not found');
                return;
            }
            //encodeURIComponent() is needed for when the customer Id contains special characters.
            const url = `https://acme-server.com/conf?customerId=${encodeURIComponent(this.customerId)}`;
            try {
                // fetch from remote server (commented out because it is fake):
                /*const response = await fetch(url, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });
                // Options for response: response.ok, response.json, response.status, response.statusText, response.text, response.clone, response.body, response.headers
                if (!response.ok) {
                    throw new Error("Error fetching configuration. {$response.status}. {$response.statusText}");
                }
                const config: ConfigResponse = response.json();
                this.saveConfig(config);
                return config;*/
                if (!this.TEST_CONFIG) {
                    throw new Error("Error fetching configuration.");
                }
                this.saveConfig(this.TEST_CONFIG);
                return this.TEST_CONFIG;
            }
            catch (error) {
                console.error('Fetch configuration failed:', error);
                throw error;
            }
        });
    }
    startFetchingConfiguration() {
        // Fetch configuration immediately and then every 1 minute
        this.fetchConfiguration();
        setInterval(() => {
            this.fetchConfiguration();
        }, 60000);
    }
}
