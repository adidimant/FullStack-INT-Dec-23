import { ConfigResponse } from '../interfaces/IConfigResponse.js';
import { Utils } from '../utils/Utils.js';

export class Configuration {
    private customerId: string;

    private TEST_CONFIG: ConfigResponse = {
        COLLECTORS_INTERVAL: 60000,
        DEFAULT_BUFFER_CONTINUOUS_COLLECTORS: 10,
        SDK_ENABLED: true
    };

    constructor() {
        this.customerId = this.getOrGenerateCustomerId();
        this.startFetchingConfiguration();
    }
    
    private getOrGenerateCustomerId(): string {
        let savedCustomerId = localStorage.getItem('customerId');
        if (!savedCustomerId) {
            savedCustomerId = Utils.generateUUID();
            localStorage.setItem('customerId', savedCustomerId);
        }
        return savedCustomerId;
    }

    /*public async getConfigFromStorage(): Promise<ConfigResponse | void> {
        const config = localStorage.getItem('sdkConfig');
        if (!config) {
            await this.fetchConfiguration();
            return this.getConfigFromStorage(); // Recall to get the freshly fetched config
        }
        return JSON.parse(config) as ConfigResponse;
    }*/

    private async fetchConfiguration(): Promise<ConfigResponse> {
        if (!this.customerId) {
            console.error('Customer ID not found');
            this.getOrGenerateCustomerId(); // TODO: and then regenerate each time customer id not found?
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
            localStorage.setItem('sdkConfig', JSON.stringify(config));
            return config;*/

            // Use test_config
            const config: ConfigResponse = this.TEST_CONFIG;
            if (!config) { 
                throw new Error("Error fetching configuration.");
            }
            localStorage.setItem('sdkConfig', JSON.stringify(config));
            //console.log('saved configuration.');
            return config;
        }
        catch(error) {
            console.error('Fetch configuration failed:', error);
            throw error;
        }
    }

    public startFetchingConfiguration(){
        // Fetch configuration immediately and then every 1 minute
        this.fetchConfiguration();
        setInterval(() => {               //first is the function and then the interval
            this.fetchConfiguration();
        }, 60000);
    }
}